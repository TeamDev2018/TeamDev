import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../model/user';
import { USERS } from '../../data/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users: Array<User>;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.users = USERS;
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.user = this.users[id];
  }
  goBack(): void {
    this.location.back();
  }
}
