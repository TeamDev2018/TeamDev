import { routeChange } from './animations/animations';
import { animate, query, sequence, style, transition, trigger, group } from '@angular/animations';
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { USERS } from '../data/users';
import { User } from '../model/user';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('teamOverview <=> teamList', routeChange)
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
