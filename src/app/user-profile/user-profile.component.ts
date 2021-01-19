import { User } from './../../model/models';
import { AppStateService } from './../app-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private state: AppStateService) { }
  public user: User;
  public users: User[];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.state.getUsers();
    console.log(this.users);
  }

}
