import { Tag } from './tag';

export class Event {
  id: number;
  name: string;
  date: string;
  e_type: number;
  event_type: string;
  address: string;
  organizer: number;
  attendees: number[];
  tags: string[];
  url: string;
}
