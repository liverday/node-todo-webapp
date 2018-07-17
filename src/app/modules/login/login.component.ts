import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-component',
    styleUrls: ['./login.scss'],
    templateUrl: './login.html'
})
export class LoginComponent implements OnInit {
    
    ngOnInit() {
        localStorage.removeItem('authToken');
    }
}