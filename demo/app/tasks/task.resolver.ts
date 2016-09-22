import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Injectable()
export class TaskResolver implements Resolve<Task> {

  constructor(private taskService: TaskService) {};

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Promise<Task> {
    let id = parseInt(route.params['id']);
    return this.taskService.findById(id); 
  }
}

