import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  projects: Project[];
  loaded: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.projects = this.dataService.getProjects();
    this.loaded = true;
  }

}
