import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

interface Language {
  label: string;
  value: string;
}

@Component({
  imports: [
    RouterModule,
    ButtonModule,
    ToolbarModule,
    SelectModule,
    FormsModule,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'angular-demo';
  private translocoService = inject(TranslocoService);

  languages: Language[] = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Spanish',
      value: 'es',
    },
    {
      label: 'Hindi',
      value: 'hi',
    },
  ];

  ngOnInit() {
    this.translocoService.setActiveLang(this.languages[0].value);
  }

  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  get currentLang() {
    return this.translocoService.getActiveLang();
  }
}
