import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event-service.service';
import { Event } from 'src/app/models/event';
import { Tag } from 'src/app/models/tag';
import { first, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TagService } from 'src/app/services/tag-service.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  private unsubscribe = new Subject<void>();

  eventForm: FormGroup;
  public errors: any = [];
  event_types = ['Community', 'Camp'];
  event: Event;
  tags: Tag[];

  constructor(
    private fb: FormBuilder, public dialog: MatDialog,
    private router: Router, private route: ActivatedRoute, private eventService: EventService, private tagService: TagService
  ) { }

  ngOnInit() {
    // Define the event creation form
    this.tagService.getTags().subscribe(tags => {
      this.tags = tags
      this.route.paramMap
      .pipe(first(), takeUntil(this.unsubscribe))
      .subscribe((paramMap) => {
        if (paramMap.has('id')) {
          var id = parseInt(paramMap.get('id'));
          this.getEvent(id);
        }
      });
    
    });

    this.eventForm = this.fb.group({
      eventGroup: this.fb.group({
        name: ['', [Validators.required]],
        date: ['', [Validators.required]],
        e_type: ['', [Validators.required]],
        location: ['', [Validators.required]],
        tags: [this.tags]
      })
    })

  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit() {
    this.eventService.updateEvent(
      this.event.id,
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

  getEvent(id: number) {
    this.eventService.getEvent(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((event) => {

        this.event = event;
        this.eventForm.get('eventGroup').setValue({
          name: this.event.name,
          date: new Date(this.event.date),
          e_type: this.event.event_type,
          location: this.event.address,
          tags: this.tags.filter(tag => this.event.tags.includes(tag.name))
        });

      }, (err) => {
        console.error(err);
      });
    }
}

