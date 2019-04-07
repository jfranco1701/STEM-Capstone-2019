import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  date: string;
  @Input()
  event_type: string;
  @Input()
  tags: Tag[]

  imageSource: string;

  constructor() { }

  ngOnInit() {
    this.imageSource = EventPhotoMap[this.event_type];
  }

}

const EventPhotoMap: any = {
  'Community': '../../assets/images/building_construction.png',
  'Camp': '../../assets/images/camp_tent.jpg'
}
