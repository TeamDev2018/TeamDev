import { TeamListComponent } from './team-list/team-list/team-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'team-overview', component: TeamOverviewComponent, data: { animation: 'teamOverview' } },
  { path: 'team', component: TeamListComponent, data: { animation: 'teamList' } },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: '', redirectTo: '/team-overview', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
