import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from '../types/post';
import { LoadPost } from '../actions/post.action';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Posts implements OnInit {
  posts$!: Observable<Post[]>;

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
}
