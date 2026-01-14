import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import {
  CreatePostInput,
  Post,
  PostsQueryResponse,
} from '@angular-demo/shared-models';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private apollo: Apollo) {}

  getPosts(pageNo: number, limit = 10): Observable<Post[]> {
    return this.apollo
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
        })
      );
  }

  addPosts(post: CreatePostInput): Observable<Post> {
    return this.apollo
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
}
