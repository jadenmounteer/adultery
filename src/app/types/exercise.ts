import { ExerciseLog } from './exercise-log';
import { Max } from './max';

export interface Exercise {
  payload: any;
  id: string;
  defaultQuote: boolean;
  exerciseImage: string | null;
  description: string | null;
  maxes: Max[] | null;
  logs: ExerciseLog[] | null;
}
