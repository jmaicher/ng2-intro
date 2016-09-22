import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div>
			<nav class="nav">
				<a routerLink="/home" routerLinkActive="active">Home</a>
				<a routerLink="/tasks" routerLinkActive="active">Tasks</a>
				<a routerLink="/wat" routerLinkActive="active">WAT</a>
			</nav>
			<main>
      	<router-outlet></router-outlet>
			</main>
    </div>
  `
})
export class AppComponent {

}
