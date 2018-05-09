import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projects: Array<any> = [];
  constructor() { }

  ngOnInit() {
    // TODO: load projects from datasource
    this.projects = [
      {
        name: 'IGT: Aurora Performance Intel',
        img: './assets/igt.png',
        tools: 'Ionic, Spring Boot',
        description: 'This is an extra long description of the project. This project will consist of a brief summary of what it was,\n' +
        ' what my role was, and the tech used.',
        repoLink: '',
        infoLink: ''
      }
    ];
  }
}

