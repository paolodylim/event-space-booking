import { Injectable } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Question } from './question';

// 
@Injectable({
	providedIn: 'root'
})
export class QuestionControlService {
  	constructor() { }

  	toFormGroup(questions: Question<any>[]) {
  		let group: any = {};

  		questions.forEach(question => {
  			group[question.key] = question.required ? 	new FormControl(question.value || '', Validators.required) 
													: 	new FormControl(question.value || '');
  		});
  		return new FormGroup(group);
	}
}

