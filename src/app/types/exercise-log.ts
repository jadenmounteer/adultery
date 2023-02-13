export interface FitnessLog {
  id: string;
  date: Date;
  text: string;
  userId: string | undefined;
  parentId: string; // This is the id of the parent of the log. For example, the exercise id.
}
