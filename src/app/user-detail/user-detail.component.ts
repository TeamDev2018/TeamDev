import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }
  getUser(id): void {
    this.userService.getUser(id)
    .subscribe(user => {
      this.user = user;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
