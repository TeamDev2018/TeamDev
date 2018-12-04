import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../model/user';
import { UserService } from '../user.service';

/**
 * This page provides a detailed view on the {@link User}
 */
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  /**
   * @ignore
   */
  user: User;
  /**
   * @ignore
   */
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  /**
   * Fetches the current userid from the route and use it to get the {@link User}
   */
  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }
  /**
   * Fetches the {@link User} from the {@link UserService} using the id from the route
   * @param id The id of the User to fetch
   */
  getUser(id): void {
    this.userService.getUser(id)
    .subscribe(user => {
      this.user = user;
    });
  }
  /**
   * Goes back to the last visited site
   */
  goBack(): void {
    this.location.back();
  }
}
