import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent implements OnInit {
  updateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<PasswordUpdateComponent>) { }

  ngOnInit() {
    this.updateForm = this.fb.group({
      currentPassword: ['', [Validators.required, Validators.maxLength(50)]],
      newPassword: ['', [Validators.required, Validators.maxLength(50)]],
      confirmNewPassword: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  save() {
    this.dialogRef.close(this.updateForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
