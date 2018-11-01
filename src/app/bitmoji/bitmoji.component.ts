import { Component, OnInit, Input } from '@angular/core';
import { buildPreviewUrl, Traits, genders, styles, randTraits, randOutfit,
  randInt, getTraits, getBrands, getOutfits, randBrand } from 'libmoji';

@Component({
  selector: 'app-bitmoji',
  templateUrl: './bitmoji.component.html',
  styleUrls: ['./bitmoji.component.scss']
})
export class BitmojiComponent implements OnInit {
  url: String;
  @Input()pose: string;
  @Input()scale: number;
  @Input()gender: number;
  @Input()style: number;
  @Input()rotation: number;
  @Input()traits: Traits[];
  @Input()outfit: string;

  constructor() { }

  ngOnInit() {
    if (!this.pose) {
      this.pose = 'fashion';
    }
    if (!this.scale) {
      this.scale = 3;
    }
    if (!this.gender) {
      this.gender = randInt(2);
    }
    if (!this.style) {
      this.style = randInt(3);
    }
    if (!this.traits) {
      this.traits = randTraits(getTraits(genders[this.gender][0], styles[this.style][0]));
    }
    if (!this.outfit) {
      this.outfit = randOutfit(getOutfits(randBrand(getBrands(genders[this.gender][0]))));
    }
    if (!this.rotation) {
      this.rotation = 0;
    }

    // tslint:disable-next-line:max-line-length
    this.url = buildPreviewUrl(this.pose, this.scale, genders[this.gender][1], styles[this.style][1], this.rotation, this.traits, this.outfit);
  }

}
