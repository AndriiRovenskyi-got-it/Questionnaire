import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question-page',
  templateUrl: './create-question-page.component.html',
  styleUrls: ['./create-question-page.component.scss']
})
export class CreateQuestionPageComponent implements OnInit {

  types = ['single choice', 'multiple choice', 'open'];
  form!: FormGroup;

  constructor(private questionnaireService: QuestionnaireService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      questionText: new FormControl(''),
      type: new FormControl(),
    });
  }

  onSubmit() {
    let newId = this.questionnaireService.questionnaireData[this.questionnaireService.questionnaireData.length - 1].id + 1;
    let newQuestion = {
      id: newId,
      questionText: this.form.value.questionText,
      type: this.form.value.type,
      answers: [],
      creationDate: new Date
    };
    this.questionnaireService.addQuestion(newQuestion);
    this.router.navigate(['/management-question']);
  }
}
