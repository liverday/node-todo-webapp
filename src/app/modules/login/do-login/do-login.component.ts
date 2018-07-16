import { Component, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    styleUrls: ['./do-login.scss'],
    templateUrl: './do-login.html'
})
export class DoLoginComponent {
    error: any;
    state;
    user : IUser = {} ;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private titleService: Title,
        private sanitizer: DomSanitizer,
    ) {
        this.titleService.setTitle('Login Backoffice');
    }

    async onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        try {
            this.state = 'loading';
        } catch (e) {

        }
    }
}

export interface IUser {
    email?: string;
    password?: string;
}