import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-entity-photo',
  templateUrl: './entity-photo.component.html',
  styleUrls: ['./entity-photo.component.scss']
})
export class EntityPhotoComponent {
  @Input() photoURL!: string;
  safePhotoUrl!: SafeStyle | null;
    constructor(
      private snitizar:DomSanitizer,
    ) { }

  get safePhotoURL(): SafeStyle | null {
    return this.photoURL? this.snitizar.bypassSecurityTrustUrl( `url(${this.photoURL})`) : null;
  }
}
