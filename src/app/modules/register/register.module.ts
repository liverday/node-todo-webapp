import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppImportsModule } from '../../app-imports.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
    imports: [
        AppImportsModule,
        RegisterRoutingModule,
        CommonModule,
        FormsModule
    ], 
    declarations: [
        RegisterComponent,
    ],
    providers: [
        AuthenticationService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class RegisterModule { }