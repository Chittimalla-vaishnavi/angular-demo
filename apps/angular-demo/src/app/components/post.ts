import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from '../modal/post';
import { LoadPost } from '../actions/post.action';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Posts implements OnInit {
  posts$!: Observable<Post[]>;
  visible = false;
  editPost = false;
  deletePost = false;
  body!: string;
  title!: string;

  posts!: Post[];
  constructor(private store: Store) {
    this.posts$ = this.store.select((state) => state.posts.posts);
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadPost(1));

    this.posts$.subscribe((val) => {
      this.posts = val;
    });
  }

  addPost() {
    this.visible = true;
  }

  onEditPost() {
    this.editPost = true;
  }

  onDeletePost() {
    this.deletePost = true;
  }
}
