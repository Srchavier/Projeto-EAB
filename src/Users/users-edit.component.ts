import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';
import {Router ,ActivatedRoute} from '@angular/router'

@Component({templateUrl: './users-edit.component.html'})
export class UsersEditComponent  {
    public user: any = {};
    constructor (private httpService: AppHttpService,
                 private  route: ActivatedRoute,
                 private  router: Router,
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

   save () {
        let data = {
            username: this.user.username,
            password: this.user.password,
            id: this.user.id   
        };

        this.httpService.builder('user')
            .update(this.user.id, data)
            .then(() => {
                this.router.navigate(['/users/' + this.user.id]);
            })
    }
}