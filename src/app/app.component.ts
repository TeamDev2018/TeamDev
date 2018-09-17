import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { USERS } from '../data/users';
import { User } from '../model/user';
import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TeamDev';
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
