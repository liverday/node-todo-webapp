import { Component, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

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
        private auth: AuthenticationService
    ) {
        this.titleService.setTitle('Login Todo');
    }

    async onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        try {
            this.state = 'loading';
            await this.auth.authenticate(this.user.email, this.user.password);
            this.router.navigate(['/todos']);
        } catch (e) {
            console.error(e);
            this.state = 'ready';
        }
    }
}

export interface IUser {
    email?: string;
    password?: string;
}