import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';

@Injectable()
export class ErrorService {

    static _instance: ErrorService;
    private _error: any;
    private errorObserver: Observer<string>;
    _errorObservable: Observable<string>;

    constructor() {
        this._errorObservable = new Observable<any>(observer => {
            this.errorObserver = observer;
        });
    }

    static get instance() {
        if (this._instance == null) {
            this._instance = new ErrorService();
        }
        return this._instance;
    }

    get observable(): Observable<any> {
        return this._errorObservable;
    }

    get error(): any {
        return this._error;
    }

    set error(error: any) {
        this._error = error;
        this.errorObserver.next(error);
    }
}
