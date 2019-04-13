import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { EventService } from '../../../services/event-service.service';
import { TagService } from '../../../services/tag-service.service';
import { Event } from 'src/app/models/event';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  eventForm: FormGroup;
  public errors: any = [];
  event_types = ['Community', 'Camp'];
  event: Event;
  tags: Tag[];

  constructor(
    private fb: FormBuilder, public dialog: MatDialog,
    private router: Router, private eventService: EventService, public tagService: TagService
  ) {}

  ngOnInit() {
    // Define the event creation form
    this.eventForm = this.fb.group({
      eventGroup: this.fb.group({
        name: ['', [Validators.required]],
        date: ['', [Validators.required]],
        e_type: ['', [Validators.required]],
        location: ['', [Validators.required]],
        tags: [[]]
      })
    })

    this.tagService.getTags().subscribe(tags => (this.tags = tags));

  }

  onSubmit() {
    this.eventService.addEvent(
      this.eventForm.get('eventGroup').get('name').value,
      this.eventForm.get('eventGroup').get('date').value,
      this.eventForm.get('eventGroup').get('e_type').value,
      this.eventForm.get('eventGroup').get('location').value,
      this.eventForm.get('eventGroup').get('tags').value)
      .subscribe(event => {
        this.event = event;
        this.router.navigate(['/home']);
      })
  }

  // Get validation error message
  getErrorMessage(groupName: string, controlName: string) {
    return this.eventForm.get(groupName).get(controlName).hasError('required') ? 'You must enter a value' :
      '';
  }

  comparer(o1: Tag, o2: Tag): boolean {
    // if possible compare by object's name property - and not by reference.
    return o1 && o2 ? o1.name === o2.name : o2 === o2;
  }
}

