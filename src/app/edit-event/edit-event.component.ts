import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Event } from '../event';
import { EventService } from '../event.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
	@Input() event: Event;

  	constructor(private route: ActivatedRoute,
			    private eventService: EventService,
			    private location: Location) { }

  	ngOnInit(): void {
  		this.getEvent();
  	}

  	getEvent(): void {
  		const id = +this.route.snapshot.paramMap.get('id');
  		this.eventService.getEvent(id)
  			.subscribe(event => this.event = event);
  	}

  	goBack(): void {
  		this.location.back();
  	}

  	save(): void {
  		this.eventService.updateEvent(this.event)
  			.subscribe(() => this.goBack());
  	}
}
