import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'team-overview', component: TeamOverviewComponent },
  { path: 'team', component: TeamComponent },
  { path: '', redirectTo: '/team-overview', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
