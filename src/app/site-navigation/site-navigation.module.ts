import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteNavigationComponent } from './site-navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    SiteNavigationComponent
  ],
  exports: [
    SiteNavigationComponent
  ]
})
export class SiteNavigationModule { }
