import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IUser, AuthenticationService } from '../../../services/auth/authentication.service';

@Component({
    styleUrls: ['./do-login.scss'],
    templateUrl: './do-login.html'
})
export class DoLoginComponent {
    error: any;
    state;
    user : IUser = {};
    isValidForm: boolean = true; 


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private titleService: Title,
        private auth: AuthenticationService
    ) {
        this.titleService.setTitle('Login | TodoWebApp');
    }

    async onSubmit(event, form) {
        if (!form.valid) {
            this.isValidForm = false;
            return;
        }

        this.isValidForm = true;
        event.preventDefault();
        event.stopPropagation();
        try {
            this.state = 'loading';
            await this.auth.authenticate(this.user.email, this.user.password);
            this.router.navigate(['/todos']);
        } catch (e) {
            if (e.status == 400) {
                this.error = 'Wrong username or password, try again!';   
            };
            this.state = 'ready';
        }
    }

    onAlertClose() {
        this.error = null;
        this.isValidForm = true;
    }
}