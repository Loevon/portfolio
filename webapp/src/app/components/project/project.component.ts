import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit() {}

  private openLink(link: string) {
    // todo: transition to another webpage
  }
}
