import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookEventComponent } from './book-event/book-event.component';
import { BrowseEventSpacesComponent } from './browse-event-spaces/browse-event-spaces.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { SiteInfoComponent } from './site-info/site-info.component';
import { ReserveBookingComponent } from './reserve-booking/reserve-booking.component';
import { CompleteReservationComponent } from './complete-reservation/complete-reservation.component';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { ReservationConfirmedComponent } from './reservation-confirmed/reservation-confirmed.component';
import { EventSpaceComponent } from './event-space/event-space.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
	declarations: [
		AppComponent,
		BookEventComponent,
		BrowseEventSpacesComponent,
		ConfirmBookingComponent,
		SiteInfoComponent,
		ReserveBookingComponent,
		CompleteReservationComponent,
		ConfirmReservationComponent,
		BookingConfirmedComponent,
		ReservationConfirmedComponent,
		EventSpaceComponent,
		ConfirmationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
