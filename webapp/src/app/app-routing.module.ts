import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {CodeComponent} from './code/code.component';
import {BiographyComponent} from './biography/biography.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'bio',
        component: BiographyComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'code',
        component: CodeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

