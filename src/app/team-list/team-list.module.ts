import { ListUserComponent } from './list-user/list-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list/team-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';

/**
 * Sub-Module for the {@link TeamListComponent} page
 */
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule
  ],
  declarations: [TeamListComponent, ListUserComponent]
})
export class TeamListModule { }
