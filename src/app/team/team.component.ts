import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import * as libmoji from 'libmoji';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  private users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
    });
  }

  getImageBackgroundClassIndex(userIndex: number) {
    return (userIndex % 2) === 0 ? true : false;
  }

}
