export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  user: User;
}

export interface PostsQueryResponse {
  posts: {
    data: Post[];
  };
}

export interface PostsStateModel {
  posts: Post[];
}

export interface CreatePostInput {
  title: string;
  body: string;
}

export interface UpdatePost {
  id: string;
  body: string;
}
