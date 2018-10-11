import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ShareListModule } from './share-list/share-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { MemberListModule } from './member-list/member-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareListModule,
    MemberViewModule,
    MemberListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
