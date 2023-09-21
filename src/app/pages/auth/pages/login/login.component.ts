import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import * as fromAction from "@app/store";
import * as fromUser from "@app/store/user";
import {Store} from "@ngrx/store";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loading$!:Observable<boolean|null>;

constructor(private store: Store<fromAction.State>) {}

loginUsuario(form: NgForm) {
  const userLoginRequest: fromUser.EmailPasswordCredentials = {
    email: form.value.email,
    password: form.value.password
  }
    this.store.dispatch(new fromUser.SignInEmail(userLoginRequest));
  }
}
