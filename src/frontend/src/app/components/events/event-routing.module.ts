import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventAddComponent } from './event-add/event-add.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventSearchComponent} from './event-search/event-search.component';

const eventRoutes: Routes = [
  { path: 'events', redirectTo: 'home', pathMatch: 'full' },
  { path: 'events',
    children: [
      { path: 'add', component: EventAddComponent },
      { path: 'edit/:id', component: EventEditComponent },
      { path: 'search', component: EventSearchComponent},
      { path: 'search/:term', component: EventSearchComponent}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(eventRoutes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
