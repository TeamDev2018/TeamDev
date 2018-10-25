import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamCarouselComponent } from './team-carousel/team-carousel.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'team-overview', component: TeamOverviewComponent },
  { path: 'team', component: TeamCarouselComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: '', redirectTo: '/team-overview', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
