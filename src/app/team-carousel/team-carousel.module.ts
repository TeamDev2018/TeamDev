import { AvatarModule } from 'ngx-avatar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { TeamCarouselComponent } from './team-carousel.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    AvatarModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [TeamCarouselComponent, CarouselItemComponent]
})
export class TeamCarouselModule { }
