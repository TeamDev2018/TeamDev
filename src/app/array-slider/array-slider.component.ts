import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-array-slider',
  templateUrl: './array-slider.component.html',
  styleUrls: ['./array-slider.component.scss']
})
export class ArraySliderComponent implements OnInit, OnChanges {
  @Input()
  field;
  @Input()
  values: Array<any>;
  @Input()
  current;
  @Output()
  currentChange = new EventEmitter<object>();
  @Output()
  index: number;
  max: number;
  realFormat;

  constructor() { }

  ngOnInit() {
    this.realFormat = (value) => this.format(this.field, this.values, value);
    this.max = this.values.length - 1;
    this.index = 0;
    if (this.current) {
      this.index = this.values.findIndex(e => this.current === ( this.field ? e[this.field] : e) );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.max = this.values.length - 1;
    if (this.index > this.max) {
      this.index = this.max;
    }
  }
  onChange() {
    this.current = ( this.field ? this.values[this.index][this.field] : this.values[this.index]);
    this.currentChange.emit(this.current);
  }
  format(field, values: Array<any>, value: number ) {
    if (!value) {
      value = 0;
    }
    let formated = values ? ( value ? values[value] : '' ) : '' ;
    if (formated && field) {
      formated = formated[field];
    }
    return formated;
  }
}
