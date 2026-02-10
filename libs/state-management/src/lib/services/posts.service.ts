import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { delay, map, Observable } from 'rxjs';
import {
  CreatePostInput,
  Post,
  PostsQueryResponse,
  UpdatePost,
} from '@angular-demo/shared-models';

@Injectable({ providedIn: 'root' })
export class PostsService {
  #apollo = inject(Apollo);

  postsApolloClient = this.#apollo.use('posts');

  getPosts(pageNo: number, limit = 10): Observable<Post[]> {
    return this.postsApolloClient
      .watchQuery<PostsQueryResponse>({
        query: gql`
      query (
        $options: PageQueryOptions = { paginate: { page: ${pageNo}, limit: ${limit} } }
      ) {
        posts(options: $options) {
          data {
            id
            title
            body
            user {
              id
              name
              username
              email
            }
          }
          
        }
      }
    `,
      })
      .valueChanges.pipe(
        map((val) => {
          return (val?.data?.posts?.data ?? []).filter(
            (post): post is Post => post != null
          );
        }),
        delay(1000)
      );
  }

  addPosts(post: CreatePostInput): Observable<Post> {
    return this.postsApolloClient
      .mutate<{ createPost: Post }>({
        mutation: gql`
          mutation CreatePost($input: CreatePostInput!) {
            createPost(input: $input) {
              id
              title
              body
              user {
                id
                name
                username
                email
              }
            }
          }
        `,
        variables: {
          input: post,
        },
      })
      .pipe(
        map((val) => {
          if (!val.data?.createPost) {
            throw new Error('Failed to create post');
          }
          return val.data.createPost;
        })
      );
  }

  updatePost(post: UpdatePost): Observable<Post> {
    return this.postsApolloClient
      .mutate<{ updatePost: Post }>({
        mutation: gql`
          mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
            updatePost(id: $id, input: $input) {
              id
              title
              body
              user {
                id
                name
                username
                email
              }
            }
          }
        `,
        variables: {
          id: post.id,
          input: {
            body: post.body,
          },
        },
      })
      .pipe(
        map((val) => {
          if (!val.data?.updatePost) {
            throw new Error('Failed to update post');
          }
          return val.data.updatePost;
        })
      );
  }

  deletePost(id: string): Observable<boolean> {
    return this.postsApolloClient
      .mutate<{ deletePost: boolean }>({
        mutation: gql`
          mutation DeletePost($id: ID!) {
            deletePost(id: $id)
          }
        `,
        variables: {
          id: id,
        },
      })
      .pipe(
        map((res) => {
          if (res.data?.deletePost == null) {
            throw new Error('Failed to delete post');
          }
          return res.data.deletePost;
        })
      );
  }
}
