import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from '../app/app-http.service';

import { UsersComponent } from './users.component';
import { UsersViewComponent } from './users-view.component';
import { UsersEditComponent } from './users-edit.component';
import { UsersNewComponent } from './users-new.component';
import { UsersRemoveComponent  } from './users-remove.component';

const appRoutes: Routes = [
  {path:'users', component: UsersComponent },
  {path:'users/new', component: UsersNewComponent},
  {path:'users/:id', component: UsersViewComponent},
  {path:'users/:id/edit', component: UsersEditComponent},
  {path:'users/:id/remove', component: UsersRemoveComponent }
]
@NgModule({

 imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ],
    declarations:[
        UsersComponent,
        UsersViewComponent,
        UsersEditComponent,
        UsersNewComponent,
        UsersRemoveComponent,
    ],
    providers: [AppHttpService]
})
export class UsersModule{}