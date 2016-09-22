import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './tasks/task-details.component';
import { WatComponent } from './wat.component';

import { TaskResolver } from './tasks/task.resolver';

const appRoutes: Routes = [
  { 
		path: '*',
		redirectTo: 'home'
	},
  {
		path: 'home',
		component: HomeComponent
	},
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks/:id',
    component: TaskDetailsComponent,
		resolve: {
			task: TaskResolver
		}
  },
  {
    path: 'wat',
    component: WatComponent
  },
  { path: '**', redirectTo: 'home' }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

