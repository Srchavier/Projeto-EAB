import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';

@Component({templateUrl: './users.component.html'})
export class UsersComponent  {
    public users: any[];
    constructor (private httpService: AppHttpService) {}

    ngOnInit() {
        this.httpService.builder('user')
            .list()
            .then((res) => {
                this.users = res;
            })
    }
}