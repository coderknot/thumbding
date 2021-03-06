import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewPostComponent } from "./new-post/new-post.component";
import { AdminComponent } from "./admin/admin.component";

const appRoutes: Routes = [
	{
	  path: '',
	  component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'project-list',
		component: ProjectListComponent
	},
	{
		path: 'projects/:id',
		component: ProjectDetailComponent
	},
	{
		path: 'new-post',
		component: NewPostComponent
	},
	{ path: 'admin',
		component: AdminComponent
	}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
