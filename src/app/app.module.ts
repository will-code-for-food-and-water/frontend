import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';
import { AppComponent } from './app.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

import { AppRoutingModule } from './app-routing.module';
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { EditMemberDialogComponent } from './member-view/edit-member-dialog/edit-member-dialog.component';
import { PlaneListModule } from './plane-list/plane-list.module';
import { AddPlaneFormComponent } from './add-plane-form/add-plane-form.component';
import { AddPlaneFormModule } from './add-plane-form/add-plane-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberListModule,
    MemberViewModule,
    PlaneListModule,
    AddPlaneFormModule
  ],
  entryComponents: [
    AddUserFormComponent,
    AddPlaneFormComponent,
    EditMemberDialogComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ger' }
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
