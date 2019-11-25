import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {Observable, Subject} from "rxjs";
import {WebcamImage} from "ngx-webcam";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  public itemForm: FormGroup;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private webCamImage: string;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ItemFormComponent>
  ) {
    this.itemForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      image: this.formBuilder.control('')
    });
  }

  ngOnInit() {
  }

  onNoClick(): void {
    let values = null;
    if (this.itemForm.valid) {
      this.trigger.next();
      this.itemForm.patchValue({image: this.webCamImage});
      values = this.itemForm.value;
    }
    this.dialogRef.close(values);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webCamImage = webcamImage.imageAsDataUrl;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
