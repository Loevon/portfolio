import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) {
    document.location.href = 'https://github.com/Loevon';
  }

  ngOnInit() {
  }

}
