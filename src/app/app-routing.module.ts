import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './utils/components/not-found/not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [ 
    { path: '', pathMatch: 'full', redirectTo: 'login'},
    { path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
    { path: 'register', loadChildren: './modules/register/register.module#RegisterModule'},
    { path: 'todos', loadChildren: './modules/todos/todos.module#TodosModule'},
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }