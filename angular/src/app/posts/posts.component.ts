import { Component, OnInit } from '@angular/core';
import { PostService } from '@core/services/api/post.service';
import { PostsQuery } from '@core/services/api/graphql.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts$: Observable<PostsQuery>;

  constructor(private readonly postService: PostService) {}

  public ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
