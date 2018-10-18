import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { MatDialog } from '../../../node_modules/@angular/material';
import { USERS } from '../../data/users';
import { NewUserDialogComponent } from '../new-user-dialog/new-user-dialog.component';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnInit {

  users: Array<User>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.users = USERS;
  }

  addNewUser() {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '40%'
    });

    dialogRef.beforeClose().subscribe((newUser: User) => {
      if (newUser) {
        this.users.push(newUser);
      }
    });
  }

}
