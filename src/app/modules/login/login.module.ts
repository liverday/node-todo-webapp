import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppBootstrapImportsModule } from '../../app-bootstrap-imports.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { LoginRoutingModule } from './login-routing.module';
import { DoLoginComponent } from './do-login/do-login.component';


@NgModule({
    imports: [
        AppBootstrapImportsModule,
        LoginRoutingModule,
        CommonModule,
        FormsModule
    ], 
    declarations: [
        LoginComponent,
        DoLoginComponent
    ],
    providers: [
        AuthenticationService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class LoginModule { }