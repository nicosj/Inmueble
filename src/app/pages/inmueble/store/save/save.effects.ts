import * as fromActions from './save.action';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {NotificationService} from "@app/services";
import {delay, Observable, of} from "rxjs";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {InmuebleCreateRequest, InmuebleResponse} from "@app/pages/inmueble/store/save/save.models";
import {environment} from "@src/environments/environment";
import {Injectable} from "@angular/core";
type Action = fromActions.All;
@Injectable()
export class SaveEffects {
    constructor(
        private actions$: Actions,
        private httpClient: HttpClient,
        private router: Router,
        private notification: NotificationService

        ) { }



    create:Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.Types.CREATE),
            map((action: fromActions.Create) => action.inmueble),
            switchMap((request: InmuebleCreateRequest) =>
            this.httpClient.post<InmuebleResponse>(`${environment.url}api/inmueble`, request
            ).pipe(
                delay(1000),
                tap((response: InmuebleResponse) => {
                    this.notification.success('Inmueble creado correctamente');
                    this.router.navigate(['/inmueble/list']);
                }),
                map((response: InmuebleResponse) => new fromActions.CreateSuccess(response)),
                catchError(error => {
                    this.notification.error(`Error al crear el inmueble: ${error.message}`);
                    return of(new fromActions.CreateError(error.message));
                })
            )
            )
        )
    );

}
