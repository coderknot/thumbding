import { Component, OnInit } from '@angular/core';
import  { ProjectService } from '../project.service';
import { Project } from "../project.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [ProjectService]
})
export class NewPostComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(name: string, creator: string, type: string, descShort: string, descLong: string, goal: number, reward: string) {
    var newProject: Project = new Project(name, creator, type, descShort, descLong, goal, reward);
    this.projectService.addProject(newProject);
    this.router.navigate(['/project-list']);
  }



}
