import { Component, OnInit } from '@angular/core';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  	selector: 'app-events',
  	templateUrl: './events.component.html',
  	styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
	events: Event[];

  	constructor(private eventService: EventService) { }

  	ngOnInit() {
  		this.getEvents();
  	}

  	getEvents(): void {
		this.eventService.getEvents()
			.subscribe(events => this.events = events);
	}

	// add event using a representative name
	/*add(representative: string): void {
		representative = representative.trim();
		if(!representative) { return; }
		this.eventService.createEvent({ representative } as Event)
			.subscribe(event => {
				this.events.push(event);
			})
	}*/
	// create event as object
	createEvent(event:Event): void {
		// event = JSON.stringify(event); //event.trim();
		if(!event) { return; }
		this.eventService.createEvent(event as Event)
			.subscribe(event => {
				this.events.push(event);
			})
	}

	cancelEvent(event:Event): void {
		console.log(event);
		this.events = this.events.filter(e => e != event);
		this.eventService.cancelEvent(event).subscribe();
	}

}
