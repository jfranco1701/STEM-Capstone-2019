import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { UserLogin } from '../../../models/UserLogin';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: UserLogin;
  topPosition: MatSnackBarVerticalPosition = 'top';
  rightPosition: MatSnackBarHorizontalPosition = 'right';


  constructor(private router: Router, private authenticationService: AuthenticationService,
              private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
    } );
  }

  ngOnInit() {
  }

  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = 'Are you sure you want to logout?';
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authenticationService.logout();

        this.snackBar.open('Logoff Successful', 'X', {
          duration: 4000,
          verticalPosition: this.topPosition,
          horizontalPosition: this.rightPosition
        });

        this.router.navigate(['/home']);
      }
    });
  }

}
