import { Tag } from '../models/tag';

export class User {
  id: number;
  parent_id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  date_of_birth: Date;
  email: string;
  phone: string;
  children: User[];
  interests: Tag[];
}
