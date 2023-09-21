import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntityPhotoModule} from "@app/shared/layouts/entity-photo/entity-photo.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityPhotoModule
  ],
  exports:[
    EntityPhotoModule
  ]
})
export class LayoutsModule { }
