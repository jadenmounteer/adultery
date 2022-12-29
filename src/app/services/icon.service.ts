import { Injectable } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  public faDumbbell = faDumbbell;

  constructor() {}
}
