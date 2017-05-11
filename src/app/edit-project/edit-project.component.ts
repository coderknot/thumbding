import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})

export class EditProjectComponent implements OnInit {
  @Input() selectedProject;
  @Output() editDoneSender = new EventEmitter();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {}

  beginUpdatingProject(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate);
    this.editDoneSender.emit();
  }

  beginDeletingProject(projectToDelete) {
    if(confirm("Are you sure you want to delete this project?")) {
      this.projectService.deleteProject(projectToDelete);
    }
  }
}
