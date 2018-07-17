import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './utils/components/not-found/not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [ 
    { path: '', component: NotFoundComponent, pathMatch: 'full'},
    { path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
    { path: 'todos', loadChildren: './modules/todos/todos.module#TodosModule'},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }