import { Injectable } from '@angular/core';
import { Http , Headers ,RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttpService {
    private url: string;
    constructor(private http: Http) {}

    builder (resource: string) {
        this.url = 'http://csf.aeb.gov.br/' + resource;
        return this;
    }

    list () {

        return this.http.get(this.url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

  
   view (id: number) {
        let url = this.url + '/' + id ;

        return this.http.get(url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

    update (id: number, data: any) {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'PUT');
        headers.append('Access-Control-Allow-Origin', '*');  
        let url = this.url + '/' + id ;
       
        return this.http.put(url, JSON.stringify(data) ,{headers: headers})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

    create (data: any) {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*'); 

        return this.http.post(this.url, JSON.stringify(data) ,{headers: headers})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

    remove (id: number) {
        let url = this.url + '/' + id ;

        return this.http.delete(url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }
}