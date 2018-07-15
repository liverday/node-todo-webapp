import { Component, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'error-alert',
    styleUrls: ['./error-alert.scss'],
    template: `
    <div class="error-alert alert alert-danger" [ngClass]="{'in': _error}">
        <div class="error-message pull-left" *ngIf="_error">
            {{_error.message}}
        </div>
        <button type="button" class="close" aria-label="Close" (click)="dismissError()"><span aria-hidden="true">&times;</span></button>
    </div>
    `
})
export class ErrorAlertComponent {
    _error: any;
    observable: Observable<any>;
    observer: Observer<any>;
    timeout = 5000;
    errorTimeout;
    defaultTimeout = 600;

    @Input()
    set error(value: any) {
        this.observer.next(value);
    }
    get error() {
        return this._error;
    }

    constructor() {
        this.observable = new Observable<any>(observer => {
            this.observer = observer;
        });

        this.observable.pipe(debounceTime(300)).subscribe(next => {
            this.setError(next);
        });

    }

    setError(value: any) {
        let timeout = 0;
        if (value && value !== null) {
            if (this.timeout !== null) {
                clearTimeout(this.timeout);
                this.dismissError();
                timeout = this.defaultTimeout;
            }
            this.timeout = setTimeout(() => {
                this._error = null;
            }, this.errorTimeout + timeout);
        }
        setTimeout(() => {
            this._error = value;
        }, timeout);
    }
    
    dismissError() {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this._error = null;
    }

}