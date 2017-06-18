import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import {Router ,ActivatedRoute} from '@angular/router'

@Component({templateUrl: './users-new.component.html'})
export class UsersNewComponent  {
    public user: any = {};
    constructor (private httpService: AppHttpService,
                 private  route: ActivatedRoute,
                 private  router: Router,
    ) {}

 

  
   save () {
        let data = {
            username: this.user.username,
            password: this.user.password,
            id: this.user.id ,
            status:1  
        };

        this.httpService.builder('user')
            .create( data)
            .then(() => {
                this.router.navigate(['/users/']);
            })
    }
}