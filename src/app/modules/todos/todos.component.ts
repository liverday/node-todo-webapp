import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'todos-component',
    styleUrls: ['./todos.scss'],
    templateUrl: './todos.html'
})
export class TodosComponent implements OnInit {

    constructor(private titleService: Title, private auth: AuthenticationService, private router: Router) {
        this.titleService.setTitle("Todos | Todo WebApp");
    }

    ngOnInit() {

    }

    async logout() {
        try {
            await this.auth.logout();
            localStorage.removeItem('authToken');
            this.router.navigate(['/login']);
        } catch (e) {
            console.error(e);
        }
    }
}