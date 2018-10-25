import { User } from '../../model/user';
import { UserService } from '../user.service';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-team-carousel',
  templateUrl: './team-carousel.component.html',
  styleUrls: ['./team-carousel.component.css']
})
export class TeamCarouselComponent implements OnInit {
  private users: Array<User>;
  public currentUser: User;

  @ViewChild('carousel') carousel: ElementRef;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('parent');
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.currentUser = this.users[0];
      setTimeout(() => {
        M.Carousel.init(this.carousel.nativeElement, {padding: 300, numVisible: 10, shift: -50, onCycleTo: (i) => {
          console.log(i);
        }});
      }, 0);
    });

  }

  avatarClicked(user: User) {
    this.currentUser = user;
  }

}
