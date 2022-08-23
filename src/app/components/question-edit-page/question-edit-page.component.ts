import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-edit-page',
  templateUrl: './question-edit-page.component.html',
  styleUrls: ['./question-edit-page.component.scss']
})
export class QuestionEditPageComponent implements OnInit {

  question: IQuestion = history.state.question;

  constructor() {
  }

  ngOnInit(): void {

  }

}
