import { Tag } from './tag';

export class Event {

  name: string;
  date: string;
  e_type: number;
  event_type: string;
  address: string;
  organizer: number;
  attendees: number[];
  tags: Tag[];
}
