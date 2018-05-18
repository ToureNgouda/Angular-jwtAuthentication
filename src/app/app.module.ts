import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { RegisterComponent } from './register/register.component';
import { Route, Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import {  HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';


const appRoutes: Routes = [
   {path:"login", component:LoginComponent},
   {path:"task", component:TaskComponent},
   {path:"register", component:RegisterComponent},
   {path:"newTask", component:NewTaskComponent},
   {path:"",redirectTo:"login",pathMatch:"full"},
   
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    RegisterComponent,
    NewTaskComponent,
   
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
