import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class Declaratia310Service {

    public theUrl = 'https://damp-spire-89553.herokuapp.com';

    constructor (private http: Http) {}

    sendData(body){
        return this.http.post(`${this.theUrl}/validate`, body)
            .toPromise()
    }
}
