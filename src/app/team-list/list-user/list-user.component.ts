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
  @Input() intersector: ElementRef;
  @Input() user: User;

  constructor(public el: ElementRef) { }

  ngOnInit() {
    const observer = new IntersectionObserver( (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.intersectionRatio > 0.99) {
        this.state = 'active';
      } else {
        this.state = 'inactive';
      }
    }, {
      root: this.intersector.nativeElement,
      rootMargin: '1px',
      threshold: 1.0
    });
    observer.observe(this.el.nativeElement);
  }

}
