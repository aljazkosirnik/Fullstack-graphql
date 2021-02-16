import { Component, OnInit } from '@angular/core';
import { UsersGQL, UsersQuery } from '@core/services/api/graphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public rates: any[];
  public loading = true;
  public error: any;

  constructor(private readonly test: UsersGQL) {}

  public ngOnInit(): void {
    this.test
      .fetch()
      .pipe(map(({ data }) => data))
      .subscribe((data: UsersQuery) => console.log(data));
  }
}
