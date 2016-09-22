import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'tasks',
  template: `
    <div>
      <h1>Tasks</h1>

      <task-editor [task]="task" (onSave)="onEditorSave($event)"></task-editor>
      <task-list [tasks]="tasks" (onEdit)="onEdit($event)" (onDelete)="onDelete($event)"></task-list>
    </div>
  `
})
export class TasksComponent implements OnInit {
	tasks: Task[];
	task: Task;

	constructor(private taskService: TaskService) {}

	ngOnInit() {
		this.tasks = this.taskService.getTasks();
		this.task = this.taskService.newTask();
	}	

	onEditorSave(task: Task) {
		this.taskService.upsertTask(task);
		this.task = this.taskService.newTask();
	}

	onEdit(task: Task) {
		this.task = task.clone();
	}

	onDelete(task: Task) {
		this.taskService.deleteTask(task);
	}
}
