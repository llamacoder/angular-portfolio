import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onClickAll();
  }

  public onClickAll() {
    let boxes = $('.form-check-input');
    for (let i = 0; i < boxes.length; i++) {
      $(boxes[i]).prop('checked', true);
    }
  }

  public onClickNone() {
    let boxes = $('.form-check-input');
    for (let i = 0; i < boxes.length; i++) {
      $(boxes[i]).prop('checked', false);
    }
  }

}
