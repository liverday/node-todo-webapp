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
                const result = await this.callPost('users/login', { email, password });
                localStorage.setItem('authToken', result.headers.get('x-auth'));
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    public register(email: string, password: string): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const result = await this.callPost('users', { email, password });
                localStorage.setItem('authToken', result.headers.get('x-auth'));
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    }

    public logout(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try { 
                await this.callDelete('users/me/token');
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }
}

export interface IUser {
    email?: string;
    password?: string;
}