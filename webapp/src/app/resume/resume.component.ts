import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    private pdfSrc = '/assets/MatthewHogetvedtResume.pdf'; // TODO: fetch from data source

  constructor() { }

  ngOnInit() {
  }

}
