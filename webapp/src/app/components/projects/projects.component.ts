import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {RepositoryService} from '../../services/repository.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projects: Array<Project> = [];
  private repository: RepositoryService;

  constructor(private repo: RepositoryService) {
    this.repository = repo;
  }

  ngOnInit() {
    this.repository
      .getProjects('http://localhost:5000/api/projects').subscribe((data: Array<Project>) => {
      this.projects = data;
    });


    for (let p of this.projects) {
      this.projects.push(new Project(p));
    }
  }
}

