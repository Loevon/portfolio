import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  title: string = '';

  constructor() { }

  ngOnInit() {
    this.title = 'Bio';
  }

}
