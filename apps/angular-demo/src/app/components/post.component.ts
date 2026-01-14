import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { AddPost, LoadPost } from '../actions/post.action';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    InputTextModule,
    TextareaModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Posts implements OnInit {
  store = inject(Store);
  fb = inject(FormBuilder);

  posts$ = this.store.select((state) => state.posts.posts);

  visible = false;
  editPost = false;
  deletePost = false;
  body!: string;
  title!: string;
  form: FormGroup = this.fb.group({
    title: new FormControl<string>('', Validators.required),
    body: new FormControl<string>('', Validators.required),
  });

  posts = toSignal(this.posts$, { initialValue: [] });

  ngOnInit(): void {
    this.store.dispatch(new LoadPost(1));
  }

  addPost() {
    this.visible = true;
  }

  createPost() {
    this.visible = false;
    const value = this.form.getRawValue();
    this.store.dispatch(new AddPost(value));
  }

  onEditPost() {
    this.editPost = true;
  }

  onDeletePost() {
    this.deletePost = true;
  }
}
