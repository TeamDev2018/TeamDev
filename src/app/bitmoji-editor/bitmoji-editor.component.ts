import { Component, OnInit } from '@angular/core';
import { Traits, genders, styles, randTraits, randOutfit,
  randInt, getTraits, getBrands, getOutfits, randBrand, poses } from 'libmoji';

@Component({
  selector: 'app-bitmoji-editor',
  templateUrl: './bitmoji-editor.component.html',
  styleUrls: ['./bitmoji-editor.component.scss']
})
export class BitmojiEditorComponent implements OnInit {

  pose: string;
  scale: number;
  gender: number;
  style: number;
  rotation: number;
  traits: Traits[];
  outfit: string;
  brand;

  listTraits: Traits[];
  listPoses: [];
  listGenders: [];
  listStyles: [];
  listOutfits: [];
  listBrands: [];

  constructor() { }

  ngOnInit() {
    this.listPoses = poses;
    if (!this.pose) {
      this.pose = 'fashion';
    }
    if (!this.scale) {
      this.scale = 2;
    }
    if (!this.gender) {
      this.gender = randInt(2);
    }
    if (!this.style) {
      this.style = randInt(3);
    }
    this.listTraits = getTraits(genders[this.gender][0], styles[this.style][0]);
    debugger;
    if (!this.traits) {
      this.traits = randTraits(this.listTraits);
    }

    this.listBrands = getBrands(genders[this.gender][0]);
    if (!this.brand) {
      this.brand = randInt(this.listBrands.length);
    }
    this.listOutfits = getOutfits(this.listBrands[this.brand]);
    if (!this.outfit) {
      this.outfit = randOutfit(this.listOutfits);
    }
    if (!this.rotation) {
      this.rotation = 0;
    }
    this.listGenders = genders;
    this.listStyles = styles;

  }
  brandChanged() {
    this.listOutfits = getOutfits(this.listBrands[this.brand]);
    this.outfit = randOutfit(this.listOutfits);
  }
  styleChanged() {
    this.listTraits = getTraits(genders[this.gender][0], styles[this.style][0]);
    this.traits = randTraits(this.listTraits);
  }
  genderChanged() {
    this.listBrands = getBrands(genders[this.gender][0]);
    this.brand = randBrand(this.listBrands);
    this.listOutfits = getOutfits(this.brand);
    this.outfit = randOutfit(this.listOutfits);
  }

}
