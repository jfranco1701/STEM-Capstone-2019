import { Component, OnInit, Input, IterableDiffers } from '@angular/core';
import { Event } from '../../../../models/event';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-event-grid',
  templateUrl: './event-grid.component.html',
  styleUrls: ['./event-grid.component.scss']
})
export class EventGridComponent implements OnInit {

  public dataSource: MatTableDataSource<Event>;
  public events: Event[] = [];
  public differ: any;
  public columnsToDisplay: String[] = ['name', 'date', 'event_type', 'event_edit'];


  @Input('dataSource')
  set eventDataSource(value: Event[]) {
    this.events = value;
    this.dataSource = new MatTableDataSource(this.events);
  }
  constructor(private differs: IterableDiffers)
  {
    this.differ = differs.find([]).create(null);
  }

  ngOnInit() {
  }

  ngDoCheck() {
    const dataSourceModified = this.differ.diff(this.events);
    if (dataSourceModified) {
      this.dataSource = new MatTableDataSource(dataSourceModified.collection);
    }
  }

}
