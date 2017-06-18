import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import {ActivatedRoute} from '@angular/router'

@Component({templateUrl: './users-view.component.html'})
export class UsersViewComponent  {
    public user: any = {};
    constructor (private httpService: AppHttpService,
                 private  route:ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                this.view(params.id);
            })
    }

    view(id: number) {
        this.httpService.builder('user')
            .view(id)
            .then((res) => {
                this.user = res;
            })
    }
}