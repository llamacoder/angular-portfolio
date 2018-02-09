import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { Project } from '../../models/Project';
import * as $ from 'jquery';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  projects: Project[];
  loaded: boolean = false;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      console.log(projects)
      this.projects = projects;
    })
    this.loaded = true;
  }

  onClick(event) {
    // figure out the project ID of the clicked card
    let card = $(event.target).parents('.card')[0];
    let $card = $(card).find('.hidden-id')[0];
    let projectID = $card.innerHTML;
    this.router.navigateByUrl(`/project/${projectID}`);
  }

}
