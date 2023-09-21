import * as fromAction from './user.actions';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {NotificationService} from "@app/services";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {UserResponse} from "@app/store/user/user.models";
import {environment} from "@src/environments/environment";

type Action = fromAction.All;

@Injectable()
export class UserEffects {

    constructor(
        private httpClient: HttpClient,
        private actions$: Actions,
        private notificationService: NotificationService,
        private router: Router
    ) {
    }

    signUpEmail: Observable<Action> = createEffect(() => this.actions$.pipe(
            ofType(fromAction.Types.SIGN_UP_EMAIL),
            map((action: fromAction.SignUpEmail) => action.user),
            switchMap(userData =>
                this.httpClient.post<UserResponse>(`${environment.url}api/usuario/registrar/`, userData).pipe(
                    tap((res: UserResponse) => {
                        localStorage.setItem('token', res.token);
                        this.router.navigate(['/login']);
                        this.notificationService.success('Usuario creado con éxito');
                    }),
                    map((res: UserResponse) => new fromAction.SignUpEmailSuccess(res.email, res || null)),
                    catchError(error => {
                        this.notificationService.error("Error al crear el usuario");
                        return of(new fromAction.SignUpEmailError(error.error.message));
                    })
                )
            )
        )
    );
    signInEmail: Observable<Action> = createEffect(() => this.actions$.pipe(
            ofType(fromAction.Types.SIGN_IN_EMAIL),
            map((action: fromAction.SignInEmail) => action.credentials),
            switchMap(userData =>
                this.httpClient.post<UserResponse>(`${environment.url}api/usuario/login`, userData).pipe(
                    tap((res: UserResponse) => {
                        localStorage.setItem('token', res.token);
                        this.router.navigate(['/']);
                        this.notificationService.success('Bienvenido');
                    }),
                    map((res: UserResponse) => new fromAction.SignInEmailSuccess(res.email, res || null)),
                    catchError(error => {
                        this.notificationService.error("Credenciales incorrectas");
                        return of(new fromAction.SignInEmailError(error.error.message));
                    })
                )
            )
        )
    );
    init: Observable<Action> = createEffect(() => this.actions$.pipe(
            ofType(fromAction.Types.INIT),
            switchMap(async () => localStorage.getItem('token')),
            switchMap(token => {
                    if (token) {
                        return this.httpClient.get<UserResponse>(`${environment.url}api/usuario/`)
                            .pipe(
                                tap((res: UserResponse) => {
                                    console.log("data del usuario en session", res)
                                }),
                                map((res: UserResponse) => new fromAction.InitAuthorized(res.email, res || null)),
                                catchError(error => {
                                    this.notificationService.error("Credenciales incorrectas");
                                    return of(new fromAction.InitError(error.error.message));
                                })
                            )
                    } else {
                        return of(new fromAction.InitUnAuthorized());
                    }
                }
            )
        )
    );
}
