import { CreatePostInput, Post, UpdatePost } from '@angular-demo/shared-models';

export class LoadPost {
  static readonly type = '[Post] load post';
  constructor(public pageNo: number, public limit = 10) {}
}

export class LoadPostSuccess {
  static readonly type = '[Post] load post success';
  constructor(public posts: Post[]) {}
}

export class AddPost {
  static readonly type = '[Post] add post';
  constructor(public post: CreatePostInput) {}
}

export class AddPostSuccess {
  static readonly type = '[Post] add post success';
  constructor(public post: Post) {}
}

export class EditPost {
  static readonly type = '[Post] edit post';
  constructor(public post: UpdatePost) {}
}

export class EditPostSuccess {
  static readonly type = '[Post] edit post success';
  constructor(public post: Post) {}
}
