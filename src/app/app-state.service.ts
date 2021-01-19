import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './../model/models';
import { Users } from '../assets/mock-data/data';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }
  getUsers(): Observable<User[]>{
    return of(Users);
  }
}
