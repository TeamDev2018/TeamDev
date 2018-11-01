import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { MatDialog } from '../../../node_modules/@angular/material';
import { NewUserDialogComponent } from '../new-user-dialog/new-user-dialog.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import * as libmoji from 'libmoji';

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
      users.map(user => {
        user.AvatarLink = this.getPreviewUrl();
      })
      this.users = users;
    });
  }

  getPreviewUrl() {
    let gender = libmoji.genders[libmoji.randInt(2)];
    let style = libmoji.styles[libmoji.randInt(3)];
    let traits = libmoji.randTraits(libmoji.getTraits(gender[0],style[0]));
    let outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));
    
    return libmoji.buildPreviewUrl("body",3,gender[1],style[1],0,traits,outfit);
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
