import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// router
import { AppRoutingModule } from './app-routing.module';

// custom components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookEventComponent } from './book-event/book-event.component';
import { BrowseEventSpacesComponent } from './browse-event-spaces/browse-event-spaces.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';
import { EventSpaceComponent } from './event-space/event-space.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { LogsComponent } from './logs/logs.component';
import { EventsComponent } from './events/events.component';

@NgModule({
	declarations: [
		AppComponent,
		BookEventComponent,
		BrowseEventSpacesComponent,
		ConfirmBookingComponent,
		ConfirmReservationComponent,
		EventSpaceComponent,
		ConfirmationComponent,
		NavbarComponent,
		// LogsComponent,
		EventsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
