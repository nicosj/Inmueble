import {Component, OnInit,EventEmitter,Input, OnDestroy,Output} from '@angular/core';
import {AngularFireStorage,AngularFireUploadTask} from "@angular/fire/compat/storage";
import {UploadTaskSnapshot} from "@angular/fire/compat/storage/interfaces";
import {Observable, Subject, lastValueFrom, async} from "rxjs";
import {finalize,takeUntil} from "rxjs/operators";
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit,OnDestroy {
  @Input() file!:File;
  @Input() path!:string;
  @Output() completed=new EventEmitter<String>();
  @Output() urlChange = new EventEmitter<string>();
  @Output() errorChange = new EventEmitter<boolean>();
  task!:AngularFireUploadTask;
  percentage$!:Observable<number | undefined>;
  downloadUrl!:string;
  snapshot$!:Observable<UploadTaskSnapshot|undefined>;
  private  destroy = new Subject<void>();
  constructor( private storage:AngularFireStorage) { }

  ngOnInit() {
    this.startUpload()
  }
  startUpload() {
    const path=`${this.file.type.split('/')[0]}/${Date.now()}_${this.file.name}`;
    const storaageRef =this.storage.ref(path);
    this.task=this.storage.upload(path,this.file);
    this.percentage$=this.task.percentageChanges();
    this.snapshot$=this.task.snapshotChanges() as Observable<UploadTaskSnapshot|undefined>;
    this.snapshot$.pipe(
      takeUntil(this.destroy),
      finalize(async()=>{
      const storageRefObservable$=storaageRef.getDownloadURL()//mirar
      this.downloadUrl=await lastValueFrom(storageRefObservable$);
      this.completed.next(this.downloadUrl);
    })
    ).subscribe();
  }
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  protected readonly async = async;
}
