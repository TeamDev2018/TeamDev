import { TeamListModule } from './team-list/team-list.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

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
import { MatInputModule, MatRadioModule, MatSliderModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BitmojiComponent } from './bitmoji/bitmoji.component';
import { BitmojiEditorComponent } from './bitmoji-editor/bitmoji-editor.component';
import { ArraySliderComponent } from './array-slider/array-slider.component';

/**
 * The base module for the whole app
 */
@NgModule({
  declarations: [
    AppComponent,
    NewUserDialogComponent,
    TeamOverviewComponent,
    UserDetailComponent,
    BitmojiComponent,
    BitmojiEditorComponent,
    ArraySliderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatCardModule,
    MatChipsModule,
    MatBadgeModule,
    AvatarModule,
    TeamListModule,
    AppRoutingModule
  ],
  entryComponents: [
    NewUserDialogComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
