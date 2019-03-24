import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-child-add',
  templateUrl: './profile-child-add.component.html',
  styleUrls: ['./profile-child-add.component.scss']
})
export class ProfileChildAddComponent implements OnInit {



  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

}
