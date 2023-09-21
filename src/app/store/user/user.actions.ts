import {Action} from "@ngrx/store";
import {EmailPasswordCredentials, UserCreateRequest,UserResponse} from "./user.models";
export enum Types{
  INIT='[User] Init:start',
  INIT_AUTHORIZED='[User] Init:Authorized',
  INIT_UNAUTHORIZED='[User] Init:UnAuthorized',
  INIT_ERROR='[User] Init:Error',

  SIGN_IN_EMAIL='[User] LogIn:start',
  SIGN_IN_EMAIL_SUCCESS='[User] LogIn:success',
  SIGN_IN_EMAIL_ERROR='[User] LogIn:error',

  SIGN_UP_EMAIL='[User] Registrar usuario con Email:start',
  SIGN_UP_EMAIL_SUCCESS='[User] Registrar usuario con Email:success',
  SIGN_UP_EMAIL_ERROR='[User] Registrar usuario con Email:error',

  SIGN_OUT_EMAIL='[User] LogOut:start',
  SIGN_OUT_EMAIL_SUCCESS='[User] LogOut:success',
  SIGN_OUT_EMAIL_ERROR='[User] LogOut:error',
}

export class Init implements Action{
  readonly type=Types.INIT;
  constructor(){}
}
export class InitAuthorized implements Action{
  readonly type=Types.INIT_AUTHORIZED;
  constructor(public email:string,public user:UserResponse | null){}
}
export class InitUnAuthorized implements Action{
  readonly type=Types.INIT_UNAUTHORIZED;
  constructor(){}
}
export class InitError implements Action{
  readonly type=Types.INIT_ERROR;
  constructor(public error:string){}
}
// login
export class SignInEmail implements Action{
  readonly type=Types.SIGN_IN_EMAIL;
  constructor(public credentials:EmailPasswordCredentials){}
}

export class SignInEmailSuccess implements Action{
  readonly type=Types.SIGN_IN_EMAIL_SUCCESS;
  constructor(public email:string,public user:UserResponse){}
}

export class SignInEmailError implements Action{
  readonly type=Types.SIGN_IN_EMAIL_ERROR;
  constructor(public error:string){}
}

// signup
export class SignUpEmail implements Action{
  readonly type=Types.SIGN_UP_EMAIL;
  constructor(public user:UserCreateRequest){}
}

export class SignUpEmailSuccess implements Action{
  readonly type=Types.SIGN_UP_EMAIL_SUCCESS;
  constructor(public email:string,public user:UserResponse){}
}

export class SignUpEmailError implements Action{
  readonly type=Types.SIGN_UP_EMAIL_ERROR;
  constructor(public error:string){}
}

// logout
export class SignOutEmail implements Action{
  readonly type=Types.SIGN_OUT_EMAIL;
  constructor(){}
}

export class SignOutEmailSuccess implements Action{
  readonly type=Types.SIGN_OUT_EMAIL_SUCCESS;
  constructor(){}
}

export class SignOutEmailError implements Action{
  readonly type=Types.SIGN_OUT_EMAIL_ERROR;
  constructor(public error:string){}
}

export type All=Init|InitAuthorized|InitUnAuthorized|InitError|SignInEmail|SignInEmailSuccess|SignInEmailError|SignUpEmail|SignUpEmailSuccess|SignUpEmailError|SignOutEmail|SignOutEmailSuccess|SignOutEmailError;
