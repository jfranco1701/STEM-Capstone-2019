import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UploadAdapter } from '../upload-adapter';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {

  eventForm: FormGroup;
  public errors: any = [];
  event_types = ['Community', 'Camp'];

  public Editor;
  public Config = { 
    ckfinder: {
      uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
      },
    toolbar: {
      items: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "imageUpload", "blockQuote", "insertTable", "mediaEmbed", "undo", "redo", "ckFinder"]
    },
    image: {
      toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"]
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
    },
    language: "en"
}

  constructor(
    private fb: FormBuilder, public dialog: MatDialog,
  ) {}

  ngOnInit() {
    // Define the event creation form
    //console.log(this.Editor.defaultConfig.toolbar.items.push('ckFinder'));
    //console.log(this.Editor.builtinPlugins.map(plugin => plugin.pluginName));
    this.Editor = ClassicEditor;
    console.log(ClassicEditor);
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

  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }
}

