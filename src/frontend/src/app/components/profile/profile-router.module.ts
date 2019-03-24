import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { ProfileChildAddComponent } from './profile-child-add/profile-child-add.component';

const routes: Routes = [

  { path: 'profile', redirectTo: 'profile/view', pathMatch: 'full' },
  {
    path: 'profile',
    component: LayoutComponent,
    children: [
      { path: 'view', component: ProfileComponent },
      { path: 'childadd', component: ProfileChildAddComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class ProfileRoutingModule {}
