import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { TaskService } from './tasks/task.service';
import { TaskResolver } from './tasks/task.resolver';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskEditorComponent } from './tasks/task-editor.component';
import { TaskDetailsComponent } from './tasks/task-details.component';

import { WatComponent } from './wat.component';
import { WatGifDirective } from './wat-gif.directive';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	providers: [
		TaskService,
		TaskResolver
	],
  declarations: [
		AppComponent,
		HomeComponent,
		TasksComponent,
		TaskListComponent,
		TaskEditorComponent,
		TaskDetailsComponent,
		WatComponent,
		WatGifDirective
	],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
