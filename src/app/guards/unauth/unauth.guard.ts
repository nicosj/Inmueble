import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad, Route,
  Router,
  RouterStateSnapshot, UrlSegment, UrlTree
} from "@angular/router";
import {select, Store} from "@ngrx/store";
import * as fromUser from "@app/store/user";
import * as fromRoot from "@app/store";
import {Observable} from "rxjs";
import {filter,map,tap} from "rxjs/operators";

import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate, CanActivateChild , CanLoad {
  constructor(private store: Store<fromRoot.State> , private router: Router) {}

  private check(): Observable<boolean> {

    return this.store.pipe(select(fromUser.getUserState)).pipe(
      filter(state=>!state.loading),
      tap(state=> {
        if(state.email){
          this.router.navigate(['/']);
        }
       }),

      map(state=>!state.email),


    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();

  }


}
