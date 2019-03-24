import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { PasswordUpdateComponent } from '../password-update/password-update.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

  updateProfile() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(ProfileUpdateComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(val => console.log('Dialog output:', val));
  }

  updatePassword() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(PasswordUpdateComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(val => console.log('Dialog output:', val));
  }

}

