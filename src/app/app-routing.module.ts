import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberViewComponent } from './member-view/member-view.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { FeeListComponent } from './fee-list/fee-list.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/memberlist', pathMatch: 'full' },
  { path: 'memberlist', component: MemberListComponent },
  { path: 'member/:id', component: MemberViewComponent },
  { path: 'planelist', component: PlaneListComponent },
  { path: 'feelist', component: FeeListComponent}];
  { path: 'creditlist', component: CreditListComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
