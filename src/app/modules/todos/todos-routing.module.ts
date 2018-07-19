import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { AuthenticationGuardService } from '../../services/auth/authentication-guard.service';
import { TodoListComponent } from './list/todo-list.component';
import { TodoListResolver } from './list/todo-list.service';

export const routes: Routes = [
    {
        path: '',
        component: TodosComponent,
        canActivateChild: [AuthenticationGuardService],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                path: 'list',
                component: TodoListComponent,
                resolve: {
                    todos: TodoListResolver
                }
            }, 
            {
                path: '**',
                redirectTo: 'list',
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodosRoutingModule { }