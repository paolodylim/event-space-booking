import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'

import { Question } from '../question'

@Component({
  	selector: 'app-question',
  	templateUrl: './dynamic-form-question.component.html',
  	styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {
	@Input() question: Question<any>;
	@Input() form: FormGroup;

	ngOnInit() {}

	get isValid() { return this.form.controls[this.question.key].valid; }
}
