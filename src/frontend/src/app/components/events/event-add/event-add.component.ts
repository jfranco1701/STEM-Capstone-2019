import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  eventForm: FormGroup;
  public errors: any = [];
  event_types = ['Community', 'Camp'];

  public Editor = ClassicEditor;

  constructor(
    private fb: FormBuilder, public dialog: MatDialog,
  ) {}

  ngOnInit() {
    // Define the event creation form
    console.log(this.Editor.defaultConfig.toolbar.items.push('ckFinder'));
    console.log(this.Editor.builtinPlugins);
    this.eventForm = this.fb.group({
      eventGroup: this.fb.group({
        name: ['', [Validators.required]],
        date: ['', [Validators.required]],
        e_type: ['', [Validators.required]],
        description : ['', Validators.required]
      })
    })
  }

  onSubmit() {
    this.create(
      this.eventForm.get('eventGroup').get('name').value,
      this.eventForm.get('eventGroup').get('date').value,
      this.eventForm.get('eventGroup').get('e_type').value,
      this.eventForm.get('eventGroup').get('description').value
    );
  }

  create(name: string, date: string, e_type: string, description: string) {
    console.log('Create Event: ' + name + ', ' + date + ', ' + e_type + ', ' + description);

    // Call event add service here
  }

  // Get validation error message
  getErrorMessage(groupName: string, controlName: string) {
    return this.eventForm.get(groupName).get(controlName).hasError('required') ? 'You must enter a value' :
           '';
  }
}

