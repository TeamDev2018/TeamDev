import { routeChange } from './animations/animations';
import { transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

/**
 * The base component, only holds the router-outlet and serves as a parent for the whole app.
 */
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
  /**
   * The title of the application.
   */
  title = 'TeamDev';

  prepRouteState(outlet: any) {
    console.log(outlet.activatedRouteData['animation']);
    return outlet.activatedRouteData['animation'] || 'firstPage';
  }
}
