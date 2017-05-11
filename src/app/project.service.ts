import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  deleteProject(projectToDelete) {
    var projectEntryInFirebase = this.getProjectById(projectToDelete.$key);
    projectEntryInFirebase.remove();
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  updateProject(localUpdatedProject) {
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
                                   creator: localUpdatedProject.creator,
                                   type: localUpdatedProject.type,
                                   descShort: localUpdatedProject.descShort,
                                   descLong: localUpdatedProject.descLong,
                                   goal: localUpdatedProject.goal,
                                   reward: localUpdatedProject.reward})
  }

}
