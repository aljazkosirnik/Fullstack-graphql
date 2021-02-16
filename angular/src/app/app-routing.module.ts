import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from '@app/posts/posts.component';
import { ViewPostComponent } from '@app/view-post/view-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    pathMatch: 'full',
  },
  {
    path: 'view-post/:id',
    component: ViewPostComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
