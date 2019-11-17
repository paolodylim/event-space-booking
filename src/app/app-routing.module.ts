import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { BookEventComponent } from './book-event/book-event.component';
import { BrowseEventSpacesComponent } from './browse-event-spaces/browse-event-spaces.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { EventSpaceComponent } from './event-space/event-space.component';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
	{ path: '', component: BookEventComponent },
	{ path: 'search-event-spaces', component: BrowseEventSpacesComponent },
	{ path: 'event-space', component: EventSpaceComponent },
	{ path: 'confirm-details', component: ConfirmBookingComponent },
	{ path: 'confirm-reservation', component: ConfirmReservationComponent },
	{ path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
