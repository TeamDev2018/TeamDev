import { Component, OnInit } from '@angular/core';
import { buildPreviewUrl, Traits, genders, styles, randTraits, randOutfit,
  randInt, getTraits, getBrands, getOutfits, randBrand } from 'libmoji';

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
  listGenders: [];
  listStyles: [];
  listOutfits: [];
  listBrands: [];

  constructor() { }

  ngOnInit() {
    this.pose = 'head';
    this.listGenders = genders;
    this.listStyles = styles;
    // debugger;

    // this.listOutfits = getOutfits(this.brand);

    // this.listTraits = getTraits();
  }
  genderChanged() {
    this.listBrands = getBrands(genders[this.gender][0]);
    // this.brand = this.listBrands[0];
  }

}
