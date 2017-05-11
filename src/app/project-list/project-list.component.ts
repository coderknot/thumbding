import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})

export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  selectedProject: null;
  filterByType: string = "type";

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  typeOnChange(optionFromMenu) {
    this.filterByType = optionFromMenu;
  }

  showEditForm(projectToEdit) {
    this.selectedProject = projectToEdit;
  }

  finishedEditing() {
    this.selectedProject = null;
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

}
