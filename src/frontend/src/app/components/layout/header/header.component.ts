import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../models/user';
import { FileExplorerComponent } from '../../file-explorer/file-explorer.component'
import { FileElement } from '../../../models/fileelement'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  topPosition: MatSnackBarVerticalPosition = 'top';
  public files: FileElement[] =  [
    { id: '1',
      isFolder: true,
      name: 'Folder1',
      parent: null },
    { id: '1',
      isFolder: false,
      name: 'File1',
      parent: null },
      { id: '2',
      isFolder: false,
      name: 'File2',
      parent: null },

  ]

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

  
  openFileExplorer() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '600px';
    dialogConfig.width = '400px'

    dialogConfig.data = {
        files : this.files
    };

    // Open the file manager
    const dialogRef = this.dialog.open(FileExplorerComponent, dialogConfig);
  }

}
