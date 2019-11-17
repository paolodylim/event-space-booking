import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
	createDb() { 
		const events = [
			{ 	
				id: 1, 
				location: 'Unioil Center Building',
				address1: 'Unit 3C Unioil Center Building',
				address2: 'Madrigal Business Park, Ayala Alabang',
				city: 'Muntinlupa',
				zip: '1770',
				capital: 'Metro Manila',


				date: '11/18/19',
				start: '6:00am',
				end: '3:00am',

				orgname: 'GroWorx',
				representative: 'Jan One',
				email: 'jan-one@email.com',
				phoneno: '(0918)111-1111'
			},
			{ 	
				id: 2, 
				location: 'Eco Tower',
				address1: '32nd Street corner 9th Avenue',
				address2: 'Bonifacio Global City',
				city: 'Taguig',
				zip: '1634',
				capital: 'Metro Manila',


				date: '11/19/19',
				start: '8:00am',
				end: '5:00am',

				orgname: 'GroWorx',
				representative: 'Jan Two',
				email: 'jan-two@email.com',
				phoneno: '(0918)222-2222'
			},
			{ 	
				id: 3, 
				location: 'Zuellig Building',
				address1: 'Makati Avenue',
				address2: 'cor. Paseo de Roxas',
				city: 'Makati',
				zip: '1225',
				capital: 'Metro Manila',


				date: '11/20/19',
				start: '8:00am',
				end: '5:00am',

				orgname: 'GroWorx',
				representative: 'Jen Tree',
				email: 'jan-tree@email.com',
				phoneno: '(0918)333-3333'
			},
		];
		return {events};
	}
	genId(events: Event[]): number {
		return events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 11;
	}
}