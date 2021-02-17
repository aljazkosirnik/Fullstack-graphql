import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PostService } from '@core/services/api/post.service';
import { Post } from '@core/services/api/graphql.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit {
  private readonly unsubscribe$ = new Subject<boolean>();
  public post: Post;

  constructor(private readonly route: ActivatedRoute, private readonly postService: PostService) {}

  public ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.unsubscribe$),
        mergeMap(({ id }) => this.postService.getPost(Number(id)).pipe(takeUntil(this.unsubscribe$))),
      )
      .subscribe((post: Post) => (this.post = post));
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
  }
}
