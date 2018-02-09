import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  id: string;
  project: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get project
    this.projectService.getProject(this.id).subscribe(project => {
      if(project != null) {
        // if(client.balance > 0) {
        //   this.hasBalance = true;
      // }
      }

      this.project = project;
      console.log(this.project)
    });
  }

  onClick() {
    console.log("Inside project click, url is " + this.project.url)
    this.router.navigateByUrl(this.project.url);
  }

}
