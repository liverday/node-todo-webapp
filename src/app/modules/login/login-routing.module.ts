import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

import { Routes, RouterModule } from '@angular/router';
import { DoLoginComponent } from './do-login/do-login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
            {
                path: '',
                component: DoLoginComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }