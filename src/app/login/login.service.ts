import { Injectable }     from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {User} from "./model/user";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  constructor (private http: Http) {}

  private loginUrl = "http://localhost:8080/api/user";

  getUser(user: User) : Observable<User> {
    return this.http.get(this.loginUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
