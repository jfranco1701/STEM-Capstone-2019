import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { NotauthorizedComponent } from './layout/notauthorized/notauthorized.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'home', component: HomeComponent },
      { path: 'notauthorized', component: NotauthorizedComponent},
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
    ]},
{ path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
