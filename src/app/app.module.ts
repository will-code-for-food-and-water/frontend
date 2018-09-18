import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule, MatCardModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, PatternValidator } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { NumberOnlyDirective } from './number.directive';

import { AppRoutingModule } from './app-routing.module'
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';

@NgModule({
  declarations: [
    AppComponent,
    AddUserFormComponent,
    NumberOnlyDirective
  ],
  imports: [
    AppRoutingModule,
    MemberListModule,
    MemberViewModule
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatStepperModule,
    MatCardModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  entryComponents: [
    AddUserFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
