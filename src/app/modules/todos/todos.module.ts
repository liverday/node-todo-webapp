import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppBootstrapImportsModule } from '../../app-bootstrap-imports.module';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { AuthenticationGuardService } from '../../services/auth/authentication-guard.service';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from 'src/app/modules/todos/todos-routing.module';
import { TodoListComponent } from 'src/app/modules/todos/list/todo-list.component';
import { RouterModule } from '@angular/router'; 
import { TodoListResolver, TodoListService } from './list/todo-list.service';

@NgModule({
    declarations: [TodosComponent, TodoListComponent], 
    imports: [
        TodosRoutingModule,
        AppBootstrapImportsModule,
        FormsModule,
        CommonModule,
        RouterModule
    ], 
    providers: [
        AuthenticationService,
        AuthenticationGuardService,
        TodoListResolver,
        TodoListService
    ], schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA,
    ]
})
export class TodosModule { }