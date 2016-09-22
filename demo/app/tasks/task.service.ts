import { Injectable } from '@angular/core';

import { Task } from './task';

@Injectable()
export class TaskService {

  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  findById(id: number): Promise<Task> {
    let task = this.tasks.find((t) => t.id == id);
    if(!task) {
      return Promise.reject<Task>(new Error(`Task with id ${id} not found`));
    }

    return Promise.resolve(task);
  }

  upsertTask(task: Task): Task {
    if(!task.id) {
	    task.id = this.tasks.length + 1;
			this.tasks.push(task);
      return task;
		}

    let existing = this.tasks.find((t) => t.id == task.id);
    existing.title = task.title;
    return existing;
  }

  deleteTask(task): void {
    let existing = this.tasks.find((t) => t.id == task.id);
    this.tasks.splice(this.tasks.indexOf(existing), 1);
  }

  newTask(): Task {
    return new Task();
  }

}

