import { State, Action, StateContext, Selector, dispatch } from '@ngxs/store';
import {
  Post,
  PostsStateModel,
} from '@angular-demo/shared-models';
import { Injectable } from '@angular/core';
import {
  AddPost,
  AddPostSuccess,
  LoadPost,
  LoadPostSuccess,
} from '../actions/post.action';
import { PostsService } from '../services/posts.service';
import { map, tap } from 'rxjs';

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
  },
})
@Injectable()
export class PostsState {
  constructor(private postsService: PostsService) {}
  @Selector()
  static getPosts(posts: PostsStateModel) {
    return posts;
  }

  @Action(LoadPost)
  loadPosts({ dispatch }: StateContext<PostsStateModel>, action: LoadPost) {
    return this.postsService.getPosts(action.pageNo).pipe(
      tap((value) => {
        if (value) {
          dispatch(new LoadPostSuccess(value));
        }
      })
    );
  }
  @Action(LoadPostSuccess)
  loadPostSuccess(
    { getState, patchState }: StateContext<PostsStateModel>,
    { posts }: LoadPostSuccess
  ) {
    const state = getState();
    patchState({
      posts: [...state.posts, ...posts],
    });
  }

  @Action(AddPost)
  createPost({ dispatch }: StateContext<PostsStateModel>, action: AddPost) {
    return this.postsService.addPosts(action.post).pipe(
      tap((newPost) => {
        if (newPost) {
          dispatch(new AddPostSuccess(newPost));
        }
      })
    );
  }

  @Action(AddPostSuccess)
  addPostSuccess(
    { getState, patchState }: StateContext<PostsStateModel>,
    action: AddPostSuccess
  ) {
    const state = getState();
    patchState({
      posts: [action.post, ...state.posts],
    });
  }
}
