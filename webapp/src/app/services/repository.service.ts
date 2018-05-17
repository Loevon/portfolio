import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Project} from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) {}

  getProjects(url: string) {
    return this.http.get<Array<Project>>(url);
  }

}
