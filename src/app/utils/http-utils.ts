import { HttpHeaders, HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { urlencode } from './url';

export class HttpUtils {
    contentType: string = 'application/json';
    constructor(protected http: HttpClient, protected endPoint: string) {

    }

    private buildAddress(method) {
        return `${this.endPoint}/${method}`;
    }

    callPost(endPoint: string, args?: { [id: string]: any }) {
        return new Promise<any>((resolve, reject) => {
            const options = {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': this.contentType,
                }),
                observe: null,
            }
            options.observe = 'response';
            this.http.post(this.buildAddress(endPoint), args, options).subscribe(
                (res: HttpResponse<any>) => {
                    if (res.headers.get('x-auth') != null) {

                    }
                    resolve({ result: res.body, headers: res.headers })
                },
                (error: HttpErrorResponse) => reject(error)
            );
        });
    }

    callGet(endPoint: string) {
        return new Promise<any>((resolve, reject) => {
            const options = {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': this.contentType,
                }),
                observe: null,
            };
            options.observe = 'response';
            this.http.get(this.buildAddress(endPoint), options).subscribe(
                (res: HttpResponse<any>) => {
                    resolve({ result: res.body })
                },
                (error: HttpErrorResponse) => reject(error)
            );
        });
    }

    callPatch(endPoint: string, args?: { [id: string]: any }) {
        return new Promise<any>((resolve, reject) => {
            const options = {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': this.contentType,
                }),
                observe: null,
            };
            options.observe = 'response';
            this.http.patch(this.buildAddress(endPoint), args, options).subscribe(
                (res: HttpResponse<any>) => {
                    resolve({ result: res.body })
                },
                (error: HttpErrorResponse) => reject(error)
            );
        });
    }

    callDelete(endPoint: string) {
        return new Promise<any>((resolve, reject) => {
            const options = {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': this.contentType,
                }),
                observe: null,
            };
            options.observe = 'response';
            this.http.delete(this.buildAddress(endPoint), options).subscribe(
                (res: HttpResponse<any>) => {
                    resolve({ result: res.body })
                },
                (error: HttpErrorResponse) => reject(error)
            );
        });
    }
}

export interface DefaultResponse<T> {
    result?: T;
    success: boolean;
    code?: string;
    message?: string;
}

