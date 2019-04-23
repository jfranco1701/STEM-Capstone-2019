import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  EventPhotoMap: any = {
    'Community': '../../../../assets/images/building_construction.png',
    'Camp': '../../../../assets/images/camp_tent.jpg'
  };

  @Input()
  id: number;
  @Input()
  name: string;
  @Input()
  date: string;
  @Input()
  event_type: string;
  @Input()
  tags: string[]
  @Input()
  event_address: string;
  @Input()
  can_edit: boolean;

  constructor() { }

  public getImageSource() {
    return this.EventPhotoMap[this.event_type];
  }
}
