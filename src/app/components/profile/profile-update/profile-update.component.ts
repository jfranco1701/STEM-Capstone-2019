import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProfileUpdateComponent>,
  ) { }

  ngOnInit() {
    this.updateForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
        dob: [''],
        phone: [''],
        address: [''],
        city: [''],
        state: [''],
        zip: [''],
      });
  }

  save() {
    this.dialogRef.close(this.updateForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}

