import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../../models/tag';

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

  constructor() { }

  ngOnInit() {
  }

  public getImageSource() {
    return this.EventPhotoMap[this.event_type];
  }
}
