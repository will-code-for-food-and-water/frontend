import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';


import { AppRoutingModule } from './app-routing.module';
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberListModule,
    MemberViewModule,
    LoginModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
