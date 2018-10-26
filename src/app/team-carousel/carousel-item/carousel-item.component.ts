import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input() user: User;
  @Output() avatarClicked = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

  activateAvatar(test: any) {
    this.avatarClicked.emit(this.user);
  }

  chipSelectChange(test: any) {
    debugger;
  }
}
