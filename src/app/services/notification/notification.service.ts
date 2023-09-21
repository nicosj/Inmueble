import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {NotificationComponent} from "@app/services/notification/components";

@Injectable()
export class NotificationService {

  constructor(private snackbar: MatSnackBar) { }
  error(message: string) {
    this.snackbar.openFromComponent(NotificationComponent, {
      data: {message},
      duration: 13000,
      panelClass: ['mat-snackbar_error'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
  success(message: string) {
    this.snackbar.openFromComponent(NotificationComponent, {
      data: {message},
      duration: 13000,
      panelClass: ['mat-snackbar_success'],
      horizontalPosition: 'right',
      verticalPosition: 'top'

    })
  }
}
