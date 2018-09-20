import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from './core/app.routing.module';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './core/material.module';




import { AppRoutingModule } from './app-routing.module'
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberListModule,
    MemberViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
