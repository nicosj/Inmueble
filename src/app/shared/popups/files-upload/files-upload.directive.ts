import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FilesUploadComponent} from "@app/shared/popups/files-upload/files-upload.component";

@Directive({
  selector: '[appFilesUpload]'
})
export class FilesUploadDirective {
  @Input() multiple: boolean = false;
  @Input() accept: string = 'image/*';
  @Input() maxSize: number = 1024 * 1024 * 2;
  @Input() maxFiles: number = 5;
  @Input() files: File[] = [];
  @Input() crop!: boolean ;
  @Output() filesChange = new EventEmitter<string|string[]>();

  constructor(private dialog:MatDialog) { }
  @HostListener('click', ['$event'])onclick(){
    this.openDialog();
  }
  private openDialog() {
    const dialogRef = this.dialog.open(FilesUploadComponent, {
      width: '550px',
      height: '500px',
      data: {
        multiple: this.multiple,
        crop: this.crop,
        accept: this.accept,
        maxSize: this.maxSize,
        maxFiles: this.maxFiles
      }
    });

    dialogRef.afterClosed().subscribe(result => {

        this.filesChange.emit(result || null);

    });
  }

}
