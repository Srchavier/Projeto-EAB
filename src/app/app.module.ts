import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppHttpService } from '../app/app-http.service';

import {UsersModule} from "../users/users.module";

const appRoutes: Routes = [
  {path:'', redirectTo:'/users', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    UsersModule,
  ],
  bootstrap: [AppComponent],
    providers: [AppHttpService]
})
export class AppModule { }
