import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppBootstrapImportsModule } from '../../app-bootstrap-imports.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
    imports: [
        AppBootstrapImportsModule,
        LoginRoutingModule
    ], 
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthenticationService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class LoginModule { }