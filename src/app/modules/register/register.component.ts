import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IUser, AuthenticationService } from '../../services/auth/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'register-component',
    templateUrl: './register.html',
    styleUrls: ['./register.scss']
})
export class RegisterComponent {
    state;
    error;
    user: IUser = {};
    isValidForm: boolean = true;
    busy;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private titleService: Title,
        private auth: AuthenticationService,
        private toastr: ToastrService
    ) {
        this.titleService.setTitle('Register | TodoWebApp');
    }

    async onSubmit(event, form) {
        if (!form.valid) {
            this.isValidForm = false;
            return;
        }
        this.isValidForm = true;
        event.preventDefault();
        event.stopPropagation();
        this.state == 'loading';
        new Promise(async (resolve, reject) => {
            try {
                const registerResponse = await this.auth.register(this.user.email, this.user.password);

                if (registerResponse) {
                    this.toastr.success('Register succeed! Logging in', 'Success!');
                    this.router.navigate(['/todos']);
                }
            } catch (e) {
                if (e.error.code === 11000 && e.error.name == 'MongoError') {
                    this.error = 'This email is already used, try another one!';
                }
                this.state = 'ready';
                reject();
            }
        });
    }

    onAlertClose() {
        this.error = null;
        this.isValidForm = true;
    }
}