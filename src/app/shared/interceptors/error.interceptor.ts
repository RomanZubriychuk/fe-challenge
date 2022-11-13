import {catchError, Observable, throwError} from "rxjs";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(catchError((error) => {
        if (error) {
          switch (error.status) {
            case 401: {
              this.Error401Handler(error);
              break;
            }
            case 404: {
               this.Error404Handler(error);
               break;
            }
            default: {
              console.log(error);
              break;
            }
          }
        }
        return throwError(error);
      }));
  }

  Error401Handler(error: HttpErrorResponse): void {
    console.log('401');
  }

  Error404Handler(error: HttpErrorResponse): void {
    console.log('404')
  }
}
