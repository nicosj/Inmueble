import {UserResponse} from "./user.models";
import * as fromActions from "./user.actions";
export interface UserState {
  entity: UserResponse | null;
  id: string | null;
  email: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  entity: null,
  id: null,
  email: null,
  loading: false,
  error: null,
};

export function reducer(state = initialState, action: fromActions.All | any): UserState {
  switch (action.type) {
    case fromActions.Types.INIT:
      return {
      ...state,
        loading: true,
      };
    case fromActions.Types.INIT_AUTHORIZED:
      return {
      ...state,
        entity: action.user,
        id: action.id,
        loading: false,
        error: null,
      };
    case fromActions.Types.INIT_UNAUTHORIZED:
      return {
      ...state,
        entity: null,
        id: null,
        loading: false,
        error: null,
      };
    case fromActions.Types.INIT_ERROR:
      return {
      ...state,
        entity: null,
        id: null,
        loading: false,
        error: action.error,
      };
    case fromActions.Types.SIGN_IN_EMAIL:
      return {
      ...state,
        loading: true,
        error: null,
        entity: null,
        id: null,
      };
    case fromActions.Types.SIGN_IN_EMAIL_SUCCESS:
      return {
      ...state,
        loading: false,
        error: null,
        entity: action.user,
        id: action.id,
      };
    case fromActions.Types.SIGN_IN_EMAIL_ERROR:
      return {
      ...state,
        loading: false,
        error: action.error,
        entity: null,
        id: null,
      };
    case fromActions.Types.SIGN_UP_EMAIL:
      return {
      ...state,
        loading: true,
        error: null,
        entity: null,
        id: null,
      };
    case fromActions.Types.SIGN_UP_EMAIL_SUCCESS:
      return {
      ...state,
        loading: false,
        error: null,
        entity: action.user,
        id: action.id,
      };
    case fromActions.Types.SIGN_UP_EMAIL_ERROR:
      return {
      ...state,
        loading: false,
        error: action.error,
        entity: null,
        id: null,
      };
    case fromActions.Types.SIGN_OUT_EMAIL:
      return {
      ...state,
        loading: true,
        error: null,
        entity: null,
        id: null,
      };
    case fromActions.Types.SIGN_OUT_EMAIL_SUCCESS:
      return {
      ...state,
        loading: false,
        error: null,
        entity: null,
        id: null,
      };
      case fromActions.Types.SIGN_OUT_EMAIL_ERROR:
      return {
      ...state,
        loading: false,
        error: action.error,
        entity: null,
        id: null,
      };
    default: {
      return state;
    }

  }
}
