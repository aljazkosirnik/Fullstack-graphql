import { ErrorHandler, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeSl from '@angular/common/locales/sl';
import { CoreModule } from '@core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlInterceptor } from '@core/url.interceptor';
import { ErrorInterceptor } from '@core/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentsModule } from '@shared/components/components.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { CookieService } from 'ngx-cookie-service';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { getErrorHandler } from '@core/config/sentry.config';
import { translateConfig } from '@core/config/translate.config';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '@core/graphql/graphql.module';
import { PostsComponent } from './posts/posts.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ViewPostComponent } from './view-post/view-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeSl, 'sl_SI');

@NgModule({
  declarations: [AppComponent, PostsComponent, ViewPostComponent, EditPostComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ComponentsModule,
    GraphQLModule,
    PipesModule,
    TranslateModule.forRoot(translateConfig),
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useFactory: getErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
