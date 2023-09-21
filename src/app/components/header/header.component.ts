import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserResponse} from "@app/store/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() menuToggle = new EventEmitter<void>();
@Input() user !: UserResponse |null;
@Input() isAuthorized!: boolean | null;
@Output() signOut = new EventEmitter<void>();
  onMenuClickDispatch(): void {
    this.menuToggle.emit();
  }
  onSignOut(): void {
      this.signOut.emit();
  }
}
