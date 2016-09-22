export class Task {
  id: number;
  title: string;

	constructor(id = undefined, title = '') {
		this.id = id;
		this.title = title;
	}

	clone(): Task {
		return new Task(this.id, this.title);
	}
}
