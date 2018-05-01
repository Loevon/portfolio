import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private title: string;
  private navigationLinks = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.title = 'Hello!';
    this.navigationLinks = [
      {
        name: 'Home',
        route: 'home/bio',
        tag: 'bio',
        active: true
      },
      {
        name: 'Resume',
        route: 'home/resume',
        tag: 'resume',
        active: false
      },
      {
        name: 'Projects',
        route: 'home/projects',
        tag: 'projects',
        active: false
      },
      {
        name: 'Contact',
        route: 'home/contact',
        tag: 'contact',
        active: false
      },
      {
        name: 'Code / Git',
        route: 'home/code',
        tag: 'code',
        active: false
      },
    ];
    this.router.navigate(['home/bio']);
  }

  onNavigate(data: any) {
    data.active = true;
    this.router.navigate([data.route]);
  }
}
