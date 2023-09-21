import {InmuebleResponse} from "@app/pages/inmueble/store/save/save.models";
import * as fromActions from './save.action';

export interface ListState {
    inmueble: InmuebleResponse | null;
    loading: boolean | null;
    error: string | null;
}

export const initialState: ListState = {
    inmueble: null,
    loading: null,
    error: null
}

export function reducer(state = initialState, action: fromActions.All | any) {
    switch (action.type) {
        case fromActions.Create:
            return {
              ...state,
                loading: true,
                error: null

            };
        case fromActions.CreateSuccess:
            return {
              ...state,
                loading: false,
                inmueble: action.inmueble,
            };
        case fromActions.CreateError:
            return {
              ...state,
                loading: false,
                error: action.error
            };
        default:{
            return state;
        }

    }

}
