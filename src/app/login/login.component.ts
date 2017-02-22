import {Component} from '@angular/core';
import {LoginService} from "./login.service";
import {Observable} from "rxjs";
import {User} from "./model/user";

@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  constructor(
    private loginService: LoginService
  ){}

  private model = new User(-1, '', '');

  onSubmit(){
    let loginData:Observable<User>;

    loginData = this.loginService.getUser(new User(-1, "", ""));

    loginData.subscribe(result => this.checkResult(result));
  }

  checkResult(user: User){

  }
}
