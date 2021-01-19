import { AppStateService } from './../app-state.service';
import { Component, OnInit } from '@angular/core';

import { User } from './../../model/models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private state: AppStateService) { }
  public selectedUser: User;
  public users: User[];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.state.getUsers()
    .subscribe(respond => this.users = respond);
    this.setUser();
  }

  setUser(): void {
    this.selectedUser = this.users.find(user => user.id === 2);
  }
}
