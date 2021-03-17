import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class CloseInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone( {
      headers: req.headers.set('Session', '123456789')
    });

    return next.handle(cloned).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            localStorage.setItem('access', JSON.stringify(true));
          }
        }, (err) => {
            if (err instanceof  HttpErrorResponse) {
              if (err.status === 401) {
                localStorage.setItem('access', JSON.stringify(false));
              }
          }
        }
      )
    );
  }
}
