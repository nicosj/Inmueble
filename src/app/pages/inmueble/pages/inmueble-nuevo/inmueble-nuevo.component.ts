import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import * as fromRoot from "@app/store";
import * as fromList from "../../store/save";

@Component({
  selector: 'app-inmueble-nuevo',
  templateUrl: './inmueble-nuevo.component.html',
  styleUrls: ['./inmueble-nuevo.component.scss']
})
export class InmuebleNuevoComponent implements OnInit{
  loading$!: Observable<boolean| null>;
  photoLoaded!: string;

  constructor(
      private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
   // this.loading$ = this.store.select(fromRoot.getLoading);
  }
  onFilesChaged(url:any) {
    if(url) {
      this.photoLoaded = url;
    }
  }
  registrarInmueble(form: NgForm) {
      if(form.valid) {
       this.loading$= this.store.pipe(select(fromList.getLoading));
       const inmuebleCreateRequest:fromList.InmuebleCreateRequest = {
              nombre: form.value.nombre,
              picture:this.photoLoaded,
              precio:Number(form.value.precio),
              direccion:form.value.direccion,
       }
       this.store.dispatch(new fromList.Create(inmuebleCreateRequest));
    }
  }
}
