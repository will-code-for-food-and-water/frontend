import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberViewComponent } from './member-view/member-view.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/sidebar', pathMatch: 'full' },
  { path: 'memberlist', component: MemberListComponent },
  { path: 'member/:id', component: MemberViewComponent },
  { path: 'planelist', component: PlaneListComponent },
  { path: 'sidebar', component: SidebarComponent}
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
