import { animate, query, sequence, style, transition, trigger, group } from '@angular/animations';
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { USERS } from '../data/users';
import { User } from '../model/user';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

const fadeIn = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ], { optional: true }),
  ])
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', fadeIn)
    ])
  ]
})
export class AppComponent {
  title = 'TeamDev';

  prepRouteState(outlet: any) {
    console.log(outlet.activatedRouteData['animation']);
    return outlet.activatedRouteData['animation'] || 'firstPage';
  }
}
