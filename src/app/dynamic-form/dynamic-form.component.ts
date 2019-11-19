import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Question } from '../question';
import { QuestionControlService } from '../question-control.service';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
		selector: 'app-dynamic-form',
		templateUrl: './dynamic-form.component.html',
		styleUrls: ['./dynamic-form.component.css'],
		providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

	@Input() questions: Question<any>[] = [];
	form: FormGroup;
	payLoad: string = '';
	events: Event[];

	constructor(private qcs: QuestionControlService,
				private eventService: EventService) { }

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		this.getEvents();
	}

	getEvents(): void {
		this.eventService.getEvents()
			.subscribe(events => this.events = events);
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
		let event = JSON.parse(this.payLoad)
		console.log(typeof event);
		if(!event) { return; }
		this.eventService.createEvent(event as Event)
			.subscribe(event => {
				this.events.push(event);
				console.log(this.events);
			});
		this.getEvents();
	}
}
