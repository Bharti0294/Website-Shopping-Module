import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { MensComponent } from './components/mens/mens.component';
import { WomensComponent } from './components/womens/womens.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'child',
    component: ChildComponent
  },
  {
    path: 'mens',
    component: MensComponent
  },
  {
    path: 'womens',
    component: WomensComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
