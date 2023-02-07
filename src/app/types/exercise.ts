import { ExerciseLog } from './exercise-log';
import { Max } from './max';

export interface Exercise {
  payload: any;
  id: string;
  defaultExercise: boolean;
  exerciseImage: string | null;
  name: string;
  description: string | null;
  maxes: Max[] | null;
  logs: ExerciseLog[] | null;
  tags: string[] | null;
}