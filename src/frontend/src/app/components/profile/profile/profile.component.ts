import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { PasswordUpdateComponent } from '../password-update/password-update.component';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Common } from '../../shared/common';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileUser: User;
  error: string;
  common: Common;
  userId: number;

  constructor(private dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.common = new Common();
    this.userId = this.common.getUserId();
    this.profileUser = new User();
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUser(this.userId)
    .subscribe(user => {
      this.profileUser = user;
    },
    error => {
      this.error = error;
    });
  }

  updateProfile() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {user: this.profileUser};

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

