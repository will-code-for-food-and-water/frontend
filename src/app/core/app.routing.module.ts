import { NgModule } from '@angular/core';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    {path : '', component : LoginComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }
  