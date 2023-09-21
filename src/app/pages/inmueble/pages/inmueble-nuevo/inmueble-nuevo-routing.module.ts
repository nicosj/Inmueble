import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InmuebleNuevoComponent} from "@app/pages/inmueble/pages/inmueble-nuevo/inmueble-nuevo.component";

const routes: Routes = [
  {
    path : '',
    component: InmuebleNuevoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleNuevoRoutingModule { }
