import { HttpHeaders, HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { urlencode } from './url';

export class HttpUtils {
    contentType: string;
    constructor(protected http: HttpClient, protected endPoint: string) {
        this.contentType = 'application/json';
    }

    private buildAddress(method) {
        return `${this.endPoint}/${method}`;
    }

    call(method: string, args?: { [id: string]: any}) {
        return new Promise<any>((resolve, reject) => {
            const options = {
                headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Content-Type': this.contentType,
                }),
                observe: null,
            };
            options.observe = 'response';
            if (localStorage.getItem('authToken') != null) {
                options.headers.append('x-auth', localStorage.getItem('authToken'))
            }
            this.http.post(this.buildAddress(method), args, options).subscribe(
                (res: HttpResponse<any>) => { 
                    resolve({result: res.body, xAuth: res.headers.get('x-auth')})
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

