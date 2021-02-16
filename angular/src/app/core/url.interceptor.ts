import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  private headers: HttpHeaders;

  constructor(private readonly cookie: CookieService) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('http')) {
      return next.handle(req);
    }

    const url = `${environment.baseUrl}/${req.url}`;
    this.headers = this.headers.append('Authorization', `bearer ${this.cookie.get('token')}`);

    return next.handle(req.clone({ url }));
  }
}
