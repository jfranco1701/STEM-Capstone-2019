import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserLogin } from 'src/app/models/userlogin';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  EventPhotoMap: any = {
    'Community': '../../../../assets/images/building_construction.png',
    'Camp': '../../../../assets/images/camp_tent.jpg'
  };

  currentUser: UserLogin;

  @Input()
  id: number;
  @Input()
  name: string;
  @Input()
  date: string;
  @Input()
  event_type: string;
  @Input()
  tags: Tag[];
  @Input()
  event_address: string;

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  public getImageSource() {
    return this.EventPhotoMap[this.event_type];
  }
}
