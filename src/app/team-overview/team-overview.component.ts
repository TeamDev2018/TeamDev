import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { MatDialog } from '../../../node_modules/@angular/material';
import { NewUserDialogComponent } from '../new-user-dialog/new-user-dialog.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {

  users: Array<User>;
  
  constructor(public dialog: MatDialog,
    private router: Router,
    private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
    });
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
