import { animate, state, style, transition, trigger } from '@angular/animations';
import { User } from '../../../model/user';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('active', style({
        opacity: 1
      })),
      state('inactive', style({
        opacity: 0.5
      })),
      transition('active => inactive', animate('200ms')),
      transition('inactive => active', animate('200ms')),
    ])
  ]
})
export class ListUserComponent implements OnInit {
  private state: String = 'inactive';

  @Input() user: User;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + 350;
    const viewPosition = scrollPosition - (componentPosition + this.el.nativeElement.offsetHeight);

    if (scrollPosition >= componentPosition && viewPosition <= this.el.nativeElement.offsetHeight / 3) {
      console.log('cp ', componentPosition);
      console.log('sp ', scrollPosition);
      this.state = 'active';
    } else {
      this.state = 'inactive';
    }

  }

}
