import { Tag } from './tag';

export class Event {

  name: string;
  date: string;
  e_type: string;
  organizer: number;
  attendees: number[];
  tags: Tag[];
}
