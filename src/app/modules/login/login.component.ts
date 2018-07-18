import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
    selector: 'login-component',
    styleUrls: ['./login.scss'],
    templateUrl: './login.html'
})
export class LoginComponent implements OnInit {
    

    constructor(private titleService: Title) {
        this.titleService.setTitle("Login | Todo WebApp");
    }
    
    ngOnInit() {
        localStorage.removeItem('authToken');
    }
}