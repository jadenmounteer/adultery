import { ExerciseLog } from './exercise-log';
import { Max } from './max';

export interface Exercise {
  // payload: any;
  id: string;
  userId: string | undefined;
  defaultExercise: boolean;
  exerciseImage: string | null;
  name: string;
  description: string | null;
  defaultTags: string[] | null;
}
