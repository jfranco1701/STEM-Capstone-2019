import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/layout/notfound/notfound.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { NotauthorizedComponent } from './components/layout/notauthorized/notauthorized.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
import { EventviewComponent } from './components/eventsview/eventview.component';
import { LogoutComponent } from './components/layout/logout/logout.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'home', component: HomeComponent },
      { path: 'notauthorized', component: NotauthorizedComponent},
      { path: 'logout', component: LogoutComponent},
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
      { path: 'users', component: UsersComponent},
      { path: 'eventview', component: EventviewComponent},
    ]},
{ path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
