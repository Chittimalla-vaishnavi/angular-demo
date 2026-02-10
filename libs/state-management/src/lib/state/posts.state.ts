import { State, Action, StateContext, Selector } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import {
  AddPost,
  AddPostSuccess,
  DeletePost,
  DeletePostSuccess,
  EditPost,
  EditPostSuccess,
  LoadPost,
  LoadPostFail,
  LoadPostStart,
  LoadPostSuccess,
} from '../actions/post.action';
import { PostsService } from '../services/posts.service';
import { catchError, tap } from 'rxjs';
import { PostsStateModel } from '@angular-demo/shared-models';

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
    loading: false,
  },
})
@Injectable()
export class PostsState {
  postsService = inject(PostsService);

  @Selector()
  static getPosts(state: PostsStateModel) {
    return state.posts;
  }

  @Selector()
  static getLoading(state: PostsStateModel) {
    return state.loading;
  }

  @Action(LoadPost)
  loadPosts({ dispatch }: StateContext<PostsStateModel>, action: LoadPost) {
    dispatch(new LoadPostStart());
    return this.postsService.getPosts(action.pageNo).pipe(
      tap((value) => {
        if (value) {
          dispatch(new LoadPostSuccess(value));
        }
      }),
      catchError(() => dispatch(new LoadPostFail()))
    );
  }

  @Action(LoadPostStart)
  loadPostStart({ patchState }: StateContext<PostsStateModel>) {
    patchState({ loading: true });
  }

  @Action(LoadPostSuccess)
  loadPostSuccess(
    { patchState }: StateContext<PostsStateModel>,
    { posts }: LoadPostSuccess
  ) {
    patchState({
      posts: posts,
      loading: false,
    });
  }

  @Action(LoadPostFail)
  loadPostFail({ patchState }: StateContext<PostsStateModel>) {
    patchState({
      posts: [],
      loading: false,
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

  @Action(EditPost)
  updatePost({ dispatch }: StateContext<PostsStateModel>, action: EditPost) {
    return this.postsService.updatePost(action.post).pipe(
      tap((updatedPost) => {
        if (updatedPost) {
          dispatch(new EditPostSuccess(updatedPost));
        }
      })
    );
  }

  @Action(EditPostSuccess)
  updatePostSuccess(
    { getState, patchState }: StateContext<PostsStateModel>,
    action: EditPostSuccess
  ) {
    const state = getState();
    patchState({
      posts: state.posts.map((post) =>
        post.id === action.post.id ? action.post : post
      ),
    });
  }

  @Action(DeletePost)
  DeletePost({ dispatch }: StateContext<PostsStateModel>, action: DeletePost) {
    return this.postsService.deletePost(action.id).pipe(
      tap((success) => {
        if (success) {
          dispatch(new DeletePostSuccess(action.id));
        }
      })
    );
  }

  @Action(DeletePostSuccess)
  DeletePostSuccess(
    { getState, patchState }: StateContext<PostsStateModel>,
    action: DeletePostSuccess
  ) {
    const state = getState();
    patchState({
      posts: state.posts.filter((post) => post.id !== action.id),
    });
  }
}
