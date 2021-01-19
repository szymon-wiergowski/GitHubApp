import { Component, OnInit, Input } from '@angular/core';

import { User } from './../../model/models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  @Input() user: User;

  ngOnInit(): void {
  }
}
