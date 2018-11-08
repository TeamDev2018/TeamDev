import { Component } from '@angular/core';

/**
 * The base component, only holds the router-outlet and serves as a parent for the whole app.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * The title of the application.
   */
  title = 'TeamDev';
}
