import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class SearchInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      params: req.params.set('key', 'AIzaSyBW5DP-_idvY_0A9HFzdxKYZJvZApbVJ5I')
    });
    return next.handle(request);
  }
}
