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
import {AppRoutingModule} from '@angular/router';
import { AppComponent } from './app.component';
import {environment} from "@src/environments/environment.dev";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase.config)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
