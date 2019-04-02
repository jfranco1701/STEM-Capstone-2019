export interface IUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  organization: number;
  user_type: number;
  is_student: boolean;
}
