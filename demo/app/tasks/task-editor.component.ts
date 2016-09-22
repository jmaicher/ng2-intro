import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task';

@Component({
  selector: 'task-editor',
  template: `
		<form (ngSubmit)="save()" #taskForm="ngForm">
    	<label>Task</label>
    	<input [(ngModel)]="task.title" name="title" placeholder="Title" autocomplete="off" required>
			<button type="submit">Save</button>
		</form>
  `
})
export class TaskEditorComponent {
	@Input() task: Task;
	@Output() onSave = new EventEmitter<Task>();

	save() {
		this.onSave.emit(this.task);
	}

}
