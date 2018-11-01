import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { AvatarModule } from 'ngx-avatar';
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamComponent } from './team/team.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NewUserDialogComponent,
    TeamOverviewComponent,
    TeamComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    AvatarModule,
    AppRoutingModule
  ],
  entryComponents: [
    NewUserDialogComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/TeamDev'}],
  bootstrap: [AppComponent],
})
export class AppModule { }
