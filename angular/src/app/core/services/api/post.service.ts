import { Injectable } from '@angular/core';
import { PostsGQL, PostsQuery } from '@core/services/api/graphql.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly postsGQL: PostsGQL) {}

  public getPosts(): Observable<PostsQuery> {
    return this.postsGQL.fetch({}).pipe(map(({ data }) => data));
  }
}
