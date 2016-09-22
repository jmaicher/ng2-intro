import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Task } from './task';

@Component({
  selector: 'task-details',
  template: `
    <div>
      <h1>{{ task.title }}</h1>

			<p>Quinoa fingerstache tbh, tousled gluten-free skateboard chartreuse photo booth fixie sartorial YOLO literally shoreditch. Tacos viral echo park dreamcatcher, edison bulb prism kogi raw denim hammock austin. Before they sold out fashion axe hell of gochujang cronut. Banjo glossier migas, next level cardigan banh mi ugh. Gochujang meggings retro, chia hexagon kogi bitters street art vaporware lo-fi sustainable VHS cray actually williamsburg. Synth edison bulb meggings, aesthetic poutine heirloom 8-bit vice polaroid locavore raclette. Portland kombucha leggings kale chips organic heirloom, fam letterpress tumblr lo-fi.</p>
    </div>
  `
})
export class TaskDetailsComponent implements OnInit {
	task: Task;

	constructor(private route: ActivatedRoute) {};

	ngOnInit() {
    this.task = this.route.snapshot.data['task'];
	}

}
