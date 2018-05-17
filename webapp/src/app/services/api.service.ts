import { Injectable } from '@angular/core';


const API = {
  projects: '/projects'
};


@Injectable()
export class ApiService {

  constructor() { }

  public static fetchAllProjects() {
    return API.projects;
  }
}
