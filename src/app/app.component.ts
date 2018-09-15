import { USERS } from '../data/users';
import { User } from '../model/user';
import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TeamDev';
  users: Array<User>;

  ngOnInit(): void {
    debugger;
    this.users = USERS;
  }
}
