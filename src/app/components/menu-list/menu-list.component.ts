import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
@Output() menuToggle= new EventEmitter<void>();
@Input() isAuthorized!: boolean | null;
@Output() signOut = new EventEmitter<void>();

  closeMenu(){
    this.menuToggle.emit();
  }
  onSignOut(){
      this.signOut.emit();
  }
}
