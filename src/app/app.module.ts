import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';

import { AppComponent } from './app.component';
import { AddUserFormComponent } from './member-list/add-user-form/add-user-form.component';

import { AppRoutingModule } from './app-routing.module';
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { EditMemberDialogComponent } from './member-view/edit-member-dialog/edit-member-dialog.component';
import { PlaneListModule } from './plane-list/plane-list.module';
import { EditPlaneDialogComponent } from './plane-list/edit-plane-dialog/edit-plane-dialog.component';
import { FeeListModule } from './fee-list/fee-list.module';
import { AddPlaneDialogComponent } from './plane-list/add-plane-dialog/add-plane-dialog.component';
import { SiteNavigationModule } from './site-navigation/site-navigation.module';
import { CreditListModule } from './credit-list/credit-list.module';
import { DeleteMemberDialogComponent } from './member-view/delete-member-dialog/delete-member-dialog.component';
import { AccountModule } from './account/account.module';
import { DeletePlaneDialogComponent } from './plane-list/delete-plane-dialog/delete-plane-dialog.component';
import { ExpensingBillListModule } from './expensing-bill-list/expensing-bill-list.module';

// Spracheinstellung
import { LOCALE_ID } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe);

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
    FeeListModule,
    SiteNavigationModule,
    CreditListModule,
    AccountModule,
    ExpensingBillListModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ger' },
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddPlaneDialogComponent,
    AddUserFormComponent,
    EditMemberDialogComponent,
    EditPlaneDialogComponent,
    DeleteMemberDialogComponent,
    DeletePlaneDialogComponent
  ]
})
export class AppModule {
}
