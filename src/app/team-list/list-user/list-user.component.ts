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
    const _observer = new IntersectionObserver( (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const entry = entries[0];
      console.log(entry, observer);
      if (entry.isIntersecting) {
        this.state = 'active';
      } else {
        this.state = 'inactive';
      }
    }, {
      root: null,
      rootMargin: '-49%'
    });
    _observer.observe(this.el.nativeElement);
  }
}
