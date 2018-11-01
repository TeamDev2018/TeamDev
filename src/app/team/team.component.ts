import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import * as libmoji from 'libmoji';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  private users: Array<User>;
  
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers()
    .subscribe(users => {
      users.forEach(user => {
        if (!user.AvatarLink) {
          let gender = libmoji.genders[libmoji.randInt(2)];
          let style = libmoji.styles[libmoji.randInt(3)];
          let traits = libmoji.randTraits(libmoji.getTraits(gender[0],style[0]));
          let outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

          user.AvatarLink = libmoji.buildPreviewUrl("body",3,gender[1],style[1],0,traits,outfit);;
          user.AvatarLinkHead = libmoji.buildPreviewUrl("head",3,gender[1],style[1],0,traits,outfit);
        }
      })

      this.users = users;
    });
  }

}
