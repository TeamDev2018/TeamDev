import { UserService } from '../../user.service';
import { User } from '../../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
    private users: Array<User>;

    constructor(private userService: UserService) { }

    ngOnInit() {

      this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
    }
}
