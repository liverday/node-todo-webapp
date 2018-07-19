import { Injectable } from '@angular/core';
import { HttpUtils } from '../../utils/http-utils';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthenticationService extends HttpUtils {

    constructor(http: HttpClient) {
        super(http, 'https://thawing-lake-90175.herokuapp.com');
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem('authToken') != null;
    }

    public authenticate(email: string, password: string): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const result = await this.callPost('users/login', {email, password});
                localStorage.setItem('authToken', result.headers.get('x-auth'));
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }
}