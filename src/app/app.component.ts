import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Router} from "@angular/router";
import {NotificationService} from "@app/services";
import * as fromRoot from "./store";
import * as fromUser from "./store/user";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showSpinner = false;
  title = 'inmueble';
  user$!: Observable<fromUser.UserResponse>;
  isAuthorized$!: Observable<boolean>;
  constructor(
    private fs: AngularFirestore,
    private notification: NotificationService,
    private store: Store<fromRoot.State>,
    private router: Router
    ) {}
  ngOnInit(){
    this.user$= this.store.pipe(select(fromUser.getUser)) as Observable<fromUser.UserResponse>;
    this.isAuthorized$= this.store.pipe(select(fromUser.getIsAuthorized)) as Observable<boolean>;
    this.store.dispatch(new fromUser.Init());
  }
  onToggleSpinner(){
    this.showSpinner = !this.showSpinner;
  }
  onFilesChanegd(event:any | any[]){

    console.log(event);
  }
  onSuccess(){
    this.notification.success("el procedimiento es un Exito");
  }
  onError(){
    this.notification.error("el procedimiento es un Error");
  }
  onSignOut(){
    localStorage.removeItem('token');
    this.store.dispatch(new fromUser.SignOutEmail);
    this.router.navigate(['/auth/login']);
  }
}
