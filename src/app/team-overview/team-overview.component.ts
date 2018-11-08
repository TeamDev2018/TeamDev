import { NewUserDialogComponent } from './../new-user-dialog/new-user-dialog.component';
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { MatDialog } from '../../../node_modules/@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

/**
 * Provides an overview over your current team and takes you further down the rabbit hole
 */
@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {
  /**
   * The users that are displayed at the top
   */
  users: Array<User>;
  /**
   * @ignore
   */
  constructor(public dialog: MatDialog,
    private router: Router,
    private userService: UserService) {}
  /**
   * Initializes the component and calls [getUsers]{@link TeamOverviewComponent#getUsers}
   */
  ngOnInit(): void {
    this.getUsers();
  }
  /**
   * Fetches all {@link User}s from the {@link UserService}
   */
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
    });
  }

  /**
   * Opens the {@link NewUserDialogComponent} dialog
   */
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
