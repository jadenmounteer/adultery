import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../components/auth/auth.service';
import { FitnessLog } from '../types/exercise-log';

@Injectable({
  providedIn: 'root',
})
export class FitnessLogsService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  public addNewLog(newLog: FitnessLog) {
    const fitnessLogsRef = this.firestore.collection('fitnessLogs');
    fitnessLogsRef.add({ ...newLog });
  }
}
