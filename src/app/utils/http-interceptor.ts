import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent,
    HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, of, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('authToken') != null) {
            var reqClone = req.clone({
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth': localStorage.getItem('authToken')
                })
            });
            return next.handle(reqClone);
        }
        return next.handle(req)
            .pipe(
            catchError(err => {

                if (err instanceof HttpErrorResponse) {
                    if (err.status == 401) {
                        this.router.navigate(['/login']);
                        return EMPTY;
                    } else {
                        return throwError(err);    
                    }
                } else {
                    return throwError(err);
                }
            }));
    }
}