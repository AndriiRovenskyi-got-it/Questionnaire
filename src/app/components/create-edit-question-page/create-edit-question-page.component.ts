import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Router } from '@angular/router';
import { IQuestionPart } from '../../interfaces/question.interface';

@Component({
  selector: 'app-create-edit-question-page',
  templateUrl: './create-edit-question-page.component.html',
  styleUrls: ['./create-edit-question-page.component.scss']
})
export class CreateEditQuestionPageComponent implements OnInit {

  types = ['single choice', 'multiple choice', 'open'];
  form!: FormGroup;
  editQuestion: IQuestionPart = { questionText: '', type: '' };

  constructor(private questionnaireService: QuestionnaireService, private router: Router) {
  }

  ngOnInit(): void {
    if (history.state.question) {
      this.editQuestion = { questionText: history.state.question.questionText, type: history.state.question.type };
    }
    this.form = new FormGroup({
      questionText: new FormControl(this.editQuestion.questionText, Validators.required),
      type: new FormControl(this.editQuestion.type, Validators.required),
    });
  }

  onSubmit() {
    const questionObj: IQuestionPart = {
      questionText: this.form.value.questionText,
      type: this.form.value.type,
    };
    if (history.state.question) {
      this.questionnaireService.editQuestion(questionObj, history.state.question.id);
    } else {
      this.questionnaireService.addQuestion(questionObj);
    }
    this.router.navigate(['/management-question']);
  }
}
