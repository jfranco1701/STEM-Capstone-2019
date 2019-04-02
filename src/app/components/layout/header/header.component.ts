import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  topPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private router: Router, private authenticationService: AuthenticationService,
              private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
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

        this.snackBar.open('Logoff Successful', '', {
          duration: 2000,
          verticalPosition: this.topPosition
        });

        this.router.navigate(['/home']);
      }
    });
  }

}
