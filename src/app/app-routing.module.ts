import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ShareListComponent } from './share-list/share-list.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/sharelist', pathMatch: 'full' },
  { path: 'sharelist', component: ShareListComponent }
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
