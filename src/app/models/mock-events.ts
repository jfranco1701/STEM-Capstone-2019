import { Event } from './event';

export const EVENTS: Event[] = [
  { name: 'Office Party', date: '2019-07-11', e_type: 'Community', organizer: 2, attendees: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
  { name: 'Fundraiser', date: '2019-05-30', e_type: 'Community', organizer: 9, attendees: [3, 6, 7, 8, 13, 16] },
  { name: 'Fun Run', date: '2019-07-25', e_type: 'Community', organizer: 2, attendees: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
  { name: 'Paper Airplane Design', date: '2019-08-30', e_type: 'Camp', organizer: 5, attendees: [2, 3, 4, 6, 7, 8, 10, 13, 16] },
  { name: 'Pam\'s Painting', date: '2019-12-11', e_type: 'Camp', organizer: 3, attendees: [2, 6, 7, 13] },
  { name: 'Pretzel Day', date: '2019-09-10', e_type: 'Camp', organizer: 10, attendees: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16] },
];
