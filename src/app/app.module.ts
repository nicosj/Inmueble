import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {provideFirebaseApp,initializeApp } from "@angular/fire/app";
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "@src/environments/environment";
import {IndicatorsModule, PopupsModule} from "@app/shared";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotificationModule} from "@app/services";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './components/header/header.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MenuListComponent } from './components/menu-list/menu-list.component';
import {MatListModule} from "@angular/material/list";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {reducers,effects} from "./store";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInteceptor} from "@app/auth-Interceptor ";

const StoreDevtools=!environment.production?StoreDevtoolsModule.instrument({maxAge:50}):[];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase.config)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    IndicatorsModule,
    BrowserAnimationsModule,
    PopupsModule,
    NotificationModule.forRoot(),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    StoreDevtoolsModule,
      StoreModule.forRoot(reducers,{
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
            }
      }),
      EffectsModule.forRoot(effects),
      HttpClientModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInteceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
