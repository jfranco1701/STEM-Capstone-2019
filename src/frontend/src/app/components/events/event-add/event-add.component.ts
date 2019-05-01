import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { EventService } from '../../../services/event-service.service';
import { Event } from 'src/app/models/event';
import { Tag } from '../../../models/tag';
import { TagService } from '../../../services/tag.service';

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
    private router: Router, private eventService: EventService,
    private tagService: TagService
  ) { }

  ngOnInit() {
    // Define the event creation form
    this.eventForm = this.fb.group({
      eventGroup: this.fb.group({
        name: ['', [Validators.required]],
        date: ['', [Validators.required]],
        e_type: ['', [Validators.required]],
        tags: [[], ]
      })
    });
    this.getTags();
  }

  onSubmit() {
    this.eventService.addEvent(
      this.eventForm.get('eventGroup').get('name').value,
      this.eventForm.get('eventGroup').get('date').value,
      this.eventForm.get('eventGroup').get('e_type').value,
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

  getTags() {
    this.tagService.getTags()
      .subscribe(tags => {
        this.tags = tags;
      });
  }
}

