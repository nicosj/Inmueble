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
import {filter,map,tap,Observable} from "rxjs";

import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild , CanLoad {
    constructor(private store: Store<fromRoot.State> , private router: Router) {}

  private check(): Observable<boolean> {
    console.log(this.store.select(fromUser.getUserState).pipe(filter(state=>!state.loading))+"tata");
      return this.store.pipe(select(fromUser.getUserState)).pipe(
          filter(state=>!state.loading),
          tap(state=>{
              if(state.email){
                  this.router.navigate(['auth/login']);
              }
          }),
          map(state=>!! state.email)

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
