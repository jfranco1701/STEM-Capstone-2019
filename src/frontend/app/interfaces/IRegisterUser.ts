export interface IRegisterUser {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  date_of_birth?: Date;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
}
