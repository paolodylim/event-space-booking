import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// components
import { Event } from './event';

// // services
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
	private eventsUrl = 'api/events';

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	}

  	constructor(private http: HttpClient,
				private logService: LogService) { }

  	getEvents(): Observable<Event[]> {
		return this.http.get<Event[]>(this.eventsUrl).pipe(
			tap(_ => this.log('fetched heroes')),
			catchError(this.handleError<Event[]>('getEvents', []))
		);
	} 

	getEvent404<Data>(id: number): Observable<Event> {
		const url = `${this.eventsUrl}/?id=${id}`;
		return this.http.get<Event[]>(url).pipe(
			map(events => event[0]),
			tap(h => {
				const outcome = h ? `fetched` : `did not find`;
				this.log(`${outcome} event id=${id}`);
			}),
			catchError(this.handleError<Event>(`getEvent id=${id}`))
		);
	}

	getEvent(id: number): Observable<Event> {
		const url = `${this.eventsUrl}/${id}`;
		return this.http.get<Event>(url).pipe(
			tap(_ => this.log(`fetched event id=${id}`)),
			catchError(this.handleError<Event>(`getEvent id=${id}`))
		);
	}

	updateEvent(event: Event): Observable<any> {
		return this.http.put(this.eventsUrl, event, this.httpOptions).pipe(
			tap(_ => this.log(`updated event id=${event.id}`)),
			catchError(this.handleError<any>('udpateEvent'))
		);
	}

	addEvent(event: Event): Observable<Event> {
		return this.http.post<Event>(this.eventsUrl, event, this.httpOptions).pipe(
			tap((newEvent: Event) => this.log(`added event w/ id=${newEvent.id}`)),
			catchError(this.handleError<Event>('addEvent'))
		);
	}

	deleteEvent(event: Event | number): Observable<Event> {
		const id = typeof event === 'number' ? event : event.id;
		const url = `${this.eventsUrl}/${id}`;

		return this.http.delete<Event>(url, this.httpOptions).pipe(
			tap(_ => this.log(`deleted event id=${id}`)),
			catchError(this.handleError<Event>('deleteEvent'))
		);
	}

	// log hero service messages with message service
	private log(msg: string) {
		this.logService.add(`LogService: ${msg}`);
	}

	// error handler to ensure app keeps running even if http request failed
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// send error to remote logging infrastructure
			console.error(error);
		
			// transform error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// let app keep running by returning empty result
			return of(result as T)
		}
	}
}
