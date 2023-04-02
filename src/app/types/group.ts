import { User } from 'src/app/types/user';

export interface Group {
  id: string;
  groupName: string | null;
  users: Array<User> | [];
}
