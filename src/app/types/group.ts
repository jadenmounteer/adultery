export interface Group {
  id: string;
  groupName: string | null;
  userIds: Array<string | undefined> | [];
}
