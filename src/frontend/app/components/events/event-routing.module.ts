import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventAddComponent } from './event-add/event-add.component';
import { EventListComponent } from './event-list/event-list.component';
import { LayoutComponent } from '../layout/layout/layout.component';

const eventRoutes: Routes = [
  { path: 'events', redirectTo: 'home', pathMatch: 'full' },
  { path: 'events',
    component: LayoutComponent,
    children: [
      { path: 'add', component: EventAddComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(eventRoutes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
