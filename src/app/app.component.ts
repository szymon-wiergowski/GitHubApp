import { Component, OnInit } from '@angular/core';

import { AppStateService } from './app-state.service';
import { User } from '../model/models';
import { Repository } from '../model/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private state: AppStateService) { }
  public title = 'GitHub Finder';
  public users: User[];
  public selectedUser: User;
  public userRepositories: Repository[];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.state.getUsers()
    .subscribe(respond => this.users = respond);
    this.setUser();
    this.getRepositories();
  }

  setUser(): void {
    this.selectedUser = this.users.find(user => user.id === 2);
  }

  getRepositories(): void {
    this.userRepositories = this.selectedUser.repos;
  }
}

