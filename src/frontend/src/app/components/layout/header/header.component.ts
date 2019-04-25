import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { UserLogin } from '../../../models/userlogin';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SearchTermChangeService } from 'src/app/services/search-term-change.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('flyUp', [
      transition(':enter', [
        style({ transform: 'translateY(50%)', opacity: '0'}),
        animate('200ms ease')
      ]),
    ]),
    trigger('flyRightAndRotate', [
      transition(':enter', [
        style({transform: 'translateX(-25px) rotate(90deg)', opacity: '0'}),
        animate('250ms ease')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: UserLogin;
  topPosition: MatSnackBarVerticalPosition = 'top';
  rightPosition: MatSnackBarHorizontalPosition = 'right';
  userType: number;
  approvedToPostEvents: boolean;

  private unsubscribe = new Subject<void>();
  eventSearchTerm: Subject<string> = new Subject<string>();

  //private readonly debounceDelayTime = 300;
  public searchOpen : boolean = false;

  @ViewChild('searchField') searchField: ElementRef;


  constructor(private router: Router, private authenticationService: AuthenticationService,
              private dialog: MatDialog, private snackBar: MatSnackBar,
              private searchTermChangeService: SearchTermChangeService, private http: HttpClient) {
    this.authenticationService.currentUser.subscribe(x => 
      { 
        this.currentUser = x;  
        if(localStorage.getItem('currentUser') != null)
        {
          this.http.post<any>(`${environment.refreshApiUrl}`, { token : JSON.parse(localStorage.getItem('currentUser')).token });
        }
      });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/events/search')) {
          console.log(event.url);
          this.searchOpen = true;
          setTimeout(() => this.searchField.nativeElement.focus());
        }  else {
          this.searchOpen = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.userType = this.authenticationService.userType;
    this.approvedToPostEvents = this.authenticationService.approvedToPostEvents;
    this.eventSearchTerm.pipe(
      takeUntil(this.unsubscribe)
    ).subscribe((searchTerm) => {
      this.searchTermChangeService.notifySearchTerm(searchTerm);
    });

  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
