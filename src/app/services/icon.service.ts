import { Injectable } from '@angular/core';
import { faDumbbell, faUser } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  public faDumbbell = faDumbbell;
  public faUser = faUser;

  constructor() {}
}
