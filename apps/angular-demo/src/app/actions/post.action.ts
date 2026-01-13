import { Post } from '../types/post';

export class LoadPost {
  static readonly type = '[Post] load post';
  constructor(public pageNo: number, public limit = 10) {}
}

export class LoadPostSuccess {
  static readonly type = '[Post] load post success';
  constructor(public posts: Post[]) {}
}
