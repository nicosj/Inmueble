import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {
  @Output() droped= new EventEmitter<FileList>();
  @Output() hovered= new EventEmitter<boolean>();
  constructor() { }
  @HostListener('drop', ['$event'])
  onDrop($event:any) {
    $event.preventDefault();
    this.droped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }
  @HostListener('dragover', ['$event'])
  onDragOver($event:any) {
    $event.preventDefault();
    this.hovered.emit(true);
  }
  @HostListener('dragLeave', ['$event'])
  onDragLeave($event:any) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
