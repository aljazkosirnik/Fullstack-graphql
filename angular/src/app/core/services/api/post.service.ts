import { Injectable } from '@angular/core';
import { GetPostGQL, Post, PostsGQL } from '@core/services/api/graphql.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly postsGQL: PostsGQL, private readonly getPostGQL: GetPostGQL) {}

  public getPosts(): Observable<Array<Post>> {
    return this.postsGQL.fetch({}).pipe(map(({ data }) => data.posts as Array<Post>));
  }

  public getPost(id: number): Observable<Post> {
    return this.getPostGQL.fetch({ id }).pipe(map(({ data }) => data.post as Post));
  }
}
