import { Component, OnInit } from '@angular/core';
import {Recepe} from '../recepe.model';
@Component({
  selector: 'app-recepe-list',
  templateUrl: './recepe-list.component.html',
  styleUrls: ['./recepe-list.component.css']
})
export class RecepeListComponent implements OnInit {
  recepes: Recepe[] = [
  new Recepe('Test Recepe','Looking for a new reason to cut down on "junk"','https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg'),
  new Recepe('Test Recepe','test descripthion','https://scx1.b-cdn.net/csz/news/800/2016/howcuttingdo.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
