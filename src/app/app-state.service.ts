import { User } from './../model/models';
import { Injectable } from '@angular/core';
import { Users } from '../assets/mock-data/data';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }
  getUsers(): User[]{
    return Users;
  }
}
