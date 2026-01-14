import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from '@angular-demo/shared-models';
import {
  AddPost,
  DeletePost,
  EditPost,
  LoadPost,
} from '@angular-demo/state-managment';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-feature-posts-post',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    InputTextModule,
    TextareaModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Posts implements OnInit {
  store = inject(Store);
  fb = inject(FormBuilder);

  posts$ = this.store.select((state) => state.posts.posts);

  visible = false;
  editPost = false;
  isDeletePost = false;
  body!: string;
  title!: string;
  selectedPost!: Post;
  selectedPostId!: string;
  form: FormGroup = this.fb.group({
    title: new FormControl<string>('', Validators.required),
    body: new FormControl<string>('', Validators.required),
  });

  posts = toSignal(this.posts$, { initialValue: [] });

  ngOnInit(): void {
    this.store.dispatch(new LoadPost(1));
  }

  addPost() {
    this.form.reset();
    this.visible = true;
  }

  createPost() {
    this.visible = false;
    const value = this.form.getRawValue();
    this.store.dispatch(new AddPost(value));
  }

  onEditPost(post: Post) {
    this.selectedPost = post;
    this.editPost = true;
    this.form.patchValue({
      title: post.title,
      body: post.body,
    });
  }

  saveEdit() {
    this.editPost = false;
    const editedValue = this.form.getRawValue();
    this.store.dispatch(
      new EditPost({
        id: this.selectedPost.id,
        body: editedValue.body,
      })
    );
  }

  onDeletePost(id: string) {
    this.isDeletePost = true;
    this.selectedPostId = id;
  }

  deletePost() {
    this.store.dispatch(new DeletePost(this.selectedPostId));
  }
}
