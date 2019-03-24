import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showLogoutButton: boolean = false;
  constructor() { }

  ngOnInit() {
    this.ShowloginLogout();
  }


  private ShowloginLogout() {
    if (localStorage.getItem('loggeduser') != null) {
      this.showLogoutButton = true;
    }
  }
}
