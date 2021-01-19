import { Component, OnInit, Input } from '@angular/core';

import { Repository, User } from './../../model/models';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  constructor() { }
  @Input() repositories: Repository[];
  @Input() user: User;

  ngOnInit(): void {
  }
}
