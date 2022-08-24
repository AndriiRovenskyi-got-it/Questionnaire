import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { IQuestion } from '../../interfaces/question.interface';

@Component({
  selector: 'app-questions-lists-page',
  templateUrl: './questions-lists-page.component.html',
  styleUrls: ['./questions-lists-page.component.scss']
})
export class QuestionsListsPageComponent implements OnInit {

  questionnaireData!: IQuestion[];
  alphabetArray = ['A', 'B', 'C', 'D', 'E'];

  constructor(private questionnaireService: QuestionnaireService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('questionnaireData')) {
      this.questionnaireData = JSON.parse(localStorage.getItem('questionnaireData')!);
    }
  }

}
