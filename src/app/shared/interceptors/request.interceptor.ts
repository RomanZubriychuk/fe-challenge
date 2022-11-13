import {Observable, tap} from "rxjs";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {

  constructor() {
  }

  private setUrl(url: string): string {
    // for local development
    if (url.startsWith('http')) {
      return url;
    }
    return `${environment.apiLink}/${url}`;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // auth token
    const tkn = localStorage.getItem('token');

    request = request.clone({
      url: this.setUrl(request.url),
      setHeaders: {
        Accept: 'application/json',
      }
    });

    // in case if have it
    if (tkn) {
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${tkn}`,
        }
      });
    }


    return next
      .handle(request)
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            // do stuff with response
          }
        })
      );
  }
}
