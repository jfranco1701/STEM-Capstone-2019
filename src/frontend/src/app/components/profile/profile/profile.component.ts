import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { ProfileChildUpdateComponent } from '../profile-child-update/profile-child-update.component';
import { PasswordUpdateComponent } from '../password-update/password-update.component';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileUser: User;
  error: string;
  userId: number;
  userType: number;

  constructor(private dialog: MatDialog, private userService: UserService,
              private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.userId = this.authenticationService.userId;
    this.userType = this.authenticationService.userType;
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

    dialogRef.afterClosed().subscribe(val => {
        if (val) {
          this.profileUser = val;
        }
      }
    );
  }

  updateChildProfile(childUser: User) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {user: childUser};

    const dialogRef = this.dialog.open(ProfileChildUpdateComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(val => {
        this.getUserInfo();
      }
    );
  }

  changePassword() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(PasswordUpdateComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(val => {});
  }

}

