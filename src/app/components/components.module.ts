import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ChildComponent } from './child/child.component';
import { WomensComponent } from './womens/womens.component';
import { MensComponent } from './mens/mens.component';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    
    ShoppingComponent,
         ChildComponent,
         
         WomensComponent,
         MensComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
