import { HttpHeaders, HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { urlencode } from './url';

export class HttpUtils {
    contentType: string;
    authToken;
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
                    'x-auth': this.authToken != null ? this.authToken : null
                }),
                withCredentials: true,
                observe: null,
            };
            options.observe = 'response';
            this.http.post(this.buildAddress(method), args, options).subscribe(
                (res: HttpResponse<any>) => resolve(res.body),
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

