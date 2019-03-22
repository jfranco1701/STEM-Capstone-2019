import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/layout/notfound/notfound.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard} from './services/guards/auth-guard.service';
import { NotauthorizedComponent } from './components/layout/notauthorized/notauthorized.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'home', component: HomeComponent },
      { path: 'notauthorized', component: NotauthorizedComponent},
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
    ]},
{ path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
