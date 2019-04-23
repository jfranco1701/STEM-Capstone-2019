import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChildAddComponent } from './profile-child-add/profile-child-add.component';
import { AuthGuard} from '../../services/guards/auth-guard.service';

const routes: Routes = [

  { path: 'profile', redirectTo: 'profile/view', pathMatch: 'full' },
  {
    path: 'profile',
    children: [
      { path: 'view', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'childadd', component: ProfileChildAddComponent, canActivate: [AuthGuard] },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class ProfileRoutingModule {}
