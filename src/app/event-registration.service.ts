import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { Question }     from './question';
import { TextboxQuestion }  from './question-textbox';	

@Injectable({
  providedIn: 'root'
})
export class EventRegistrationService {
  getForm() {
		let questions: Question<any>[] = [

			new DropdownQuestion({
		        key: 'location',
		        label: 'Meeting Room Location',
		        options: [
		          {key: '0',  value: 'Unit 3C / Unioil Center Building'},
		          {key: '1',  value: 'Unit 3D / Unioil Center Building'},
		          {key: '2',  value: 'Unit 3E / Unioil Center Building'},
		          {key: '3',  value: 'Unit 88A, 32nd Street corner 9th Avenue'},
		          {key: '4',  value: 'Unit 58C, 32nd Street corner 9th Avenue'},
		          {key: '5',  value: 'Unit 28B, 32nd Street corner 9th Avenue'},
		          {key: '6',   value: 'Unit 31A, Zuellig Building'},
		          {key: '7',   value: 'Unit 22B, Zuellig Building'},
		          {key: '8',   value: 'Unit 32G, Zuellig Building'},
		        ],
	      	}),

	      	new TextboxQuestion({
		        key: 'address1',
		        label: 'Location',
		        value: 'Building / Street Name',
	      	}),


			new TextboxQuestion({
		        key: 'address2',
		        label: 'Township, Development, etc.',
		        value: 'ex. Alabang, Bonifacio Global City, etc.',
	      	}),

	      	new TextboxQuestion({
		        key: 'city',
		        label: 'City',
		        value: 'City',
	      	}),

	      	new TextboxQuestion({
		        key: 'zip',
		        label: 'Zipcode',
		        value: '',
		        type: 'number'
	      	}),

	      	new TextboxQuestion({
		        key: 'capital',
		        label: 'Capital',
		        value: 'Metro Manila',
		        type: 'text'
	      	}),

		    new TextboxQuestion({
		        key: 'date',
		        label: 'Date',
		        type: 'date',
		        required: true,
		    }),

		    new TextboxQuestion({
		        key: 'start',
		        label: 'Start Time',
		        type: 'time',
		        required: true,
		    }),

		    new TextboxQuestion({
		        key: 'end',
		        label: 'End Time',
		        type: 'time',
		        required: true,
		    }),

		    new TextboxQuestion({
		        key: 'org-name',
		        label: 'Company Name',
		        value: 'Name of your Organization',
		        required: true,
		    }),

		    new TextboxQuestion({
		        key: 'representative',
		        label: 'Company Representative\'s Name',
		        value: 'Please enter your name here...',
		        required: true,
		    }),

		    new TextboxQuestion({
		        key: 'email',
		        label: 'Email',
		        type: 'email',
		        required: true
		    }),

		    new TextboxQuestion({
		        key: 'phoneno',
		        label: 'Phone Number',
		        type: 'number',
		        required: true
		    }),

		]

		return questions.sort((a,b) => a.order - b.order);
	}
}

/*
	location: 'Unit 31A, Zuellig Building',
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

*/


