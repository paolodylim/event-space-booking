import { Component, OnInit } from '@angular/core';

import { Event } from '../event';
import { EventRegistrationService } from '../event-registration.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  providers: [ EventRegistrationService ]
})
export class CreateEventComponent implements OnInit {
	events: Event[];
	questions: any[];
	registeredEvent: any;

  	constructor(private eventRegService: EventRegistrationService,
  				private eventService: EventService) { 
  		this.questions = eventRegService.getForm();
  	}

  	ngOnInit() { }

	getEvents(): void {
		this.eventService.getEvents()
			.subscribe(events => this.events = events);
	}
}
