import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/project";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projects: Array<Project> = [];
  constructor() { }

  ngOnInit() {
    // TODO: load projects from datasource
    const tempProjects = [
      {
        name: 'IGT: Aurora Performance Intel',
        image: './assets/igt.png',
        tools: 'Ionic, Spring Boot',
        description: 'This is an extra long description of the project. This project will consist of a brief summary of what it was,\n' +
        ' what my role was, and the tech used.',
        repoLink: '',
        infoLink: ''
      }
    ];

    for (let p of tempProjects) {
      this.projects.push(new Project(p));
    }
  }
}

