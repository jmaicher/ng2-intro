import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from './task';

@Component({
  selector: 'task-list',
  template: `
    <ul>
      <li *ngFor="let task of tasks">
        {{ task.title }}
        [
          <a href="javascript:;" (click)="editTask(task)">edit</a>,
          <a href="javascript:;" (click)="deleteTask(task)">delete</a>,
          <a [routerLink]="['/tasks', 1]">details</a>
        ]
      </li>
    </ul>
  `
})
export class TaskListComponent {
	@Input() tasks: Task[];
	@Output() onEdit = new EventEmitter<Task>();
	@Output() onDelete = new EventEmitter<Task>();

	editTask(task) {
		this.onEdit.emit(task);
	}

	deleteTask(task) {
		this.onDelete.emit(task);
	}
}
