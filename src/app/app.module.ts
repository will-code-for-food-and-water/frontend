import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

import { AppRoutingModule } from './app-routing.module';
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { PlaneListModule } from './plane-list/plane-list.module';
import { AddPlaneFormComponent } from './add-plane-form/add-plane-form.component';
import { AddPlaneFormModule } from './add-plane-form/add-plane-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MemberListModule,
    MemberViewModule,
    PlaneListModule,
    AddPlaneFormModule
  ],
  entryComponents: [
    AddUserFormComponent,
    AddPlaneFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
