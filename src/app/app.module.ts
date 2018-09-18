import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';
import { AppComponent } from './app.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { NumberOnlyDirective } from './number.directive';

import { AppRoutingModule } from './app-routing.module';
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { EditMemberDialogComponent } from './member-view/edit-member-dialog/edit-member-dialog.component';
import { PlaneListModule } from './plane-list/plane-list.module';

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
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ger' }
  ],
  entryComponents: [
    EditMemberDialogComponent
  ]
  bootstrap: [AppComponent],
})
export class AppModule {
}
