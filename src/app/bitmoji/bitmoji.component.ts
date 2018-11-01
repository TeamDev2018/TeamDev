import { Component, OnInit, Input } from '@angular/core';
import { buildPreviewUrl, Traits } from 'libmoji';

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
    this.url = buildPreviewUrl(this.pose, this.scale, this.gender, this.style, this.rotation, this.traits, this.outfit);
  }

}
