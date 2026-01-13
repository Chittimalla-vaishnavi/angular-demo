import { State, Action, StateContext, Selector, dispatch } from '@ngxs/store';
import { Post, PostsStateModel } from '../types/post';
import { Injectable } from '@angular/core';
import { LoadPost, LoadPostSuccess } from '../actions/post.action';
import { PostsService } from '../service/posts.service';
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
    this.postsService.getPosts(action.pageNo).subscribe((value) => {
      if (value) {
        dispatch(new LoadPostSuccess(value));
      }
    });
  }
  @Action(LoadPostSuccess)
  loadPostSuccess(
    {getState, patchState}:StateContext<PostsStateModel>,
    {posts}:LoadPostSuccess
  ){
    const state = getState();
    patchState(
        {
            posts: [
                ...state.posts,
                ...posts
            ]
        }
    )
  }
}
