import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BookEventComponent } from './book-event/book-event.component';
import { BrowseEventSpacesComponent } from './browse-event-spaces/browse-event-spaces.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { EventSpaceComponent } from './event-space/event-space.component';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';

const routes: Routes = [
	{ path: '', component: BookEventComponent },
	{ path: 'search-event-spaces', component: BrowseEventSpacesComponent },
	{ path: 'event-space', component: EventSpaceComponent },
	{ path: 'confirm-details', component: ConfirmBookingComponent },
	{ path: 'confirm-reservation', component: ConfirmReservationComponent },
	{ path: 'confirmation', component: ConfirmationComponent },
	{ path: 'events', component: EventsComponent },
	{ path: 'create-event', component: CreateEventComponent },
	{ path: 'event/:id', component: EditEventComponent }
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
