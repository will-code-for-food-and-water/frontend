import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

import { AppRoutingModule } from './app-routing.module';
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MemberListModule,
    MemberViewModule,
    PlaneListModule
  ],
  entryComponents: [
    AddUserFormComponent,
    AddPlaneFormComponent
  ],
  providers: [
    { provide: localeDe, useValue: 'de' },
    { provide: MAT_DATE_LOCALE, useValue: 'ger' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
