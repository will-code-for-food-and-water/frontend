import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './member-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatSortModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MemberListService } from './../services/memberlist.service';
import { AddUserFormModule } from './../add-user-form/add-user-form.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    AddUserFormModule
  ],
  declarations: [
    MemberListComponent
  ],
  exports: [
    MemberListComponent
  ],
  providers: [
    MemberListService
  ]
})
export class MemberListModule { }
