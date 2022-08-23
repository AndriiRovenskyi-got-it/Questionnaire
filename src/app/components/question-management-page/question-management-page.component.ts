import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { IQuestion } from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-management-page',
  templateUrl: './question-management-page.component.html',
  styleUrls: ['./question-management-page.component.scss']
})
export class QuestionManagementPageComponent implements OnInit {

  questionnaireData!: IQuestion[];

  constructor(public questionnaireService: QuestionnaireService) {
  }

  ngOnInit(): void {
    this.questionnaireData = this.questionnaireService.questionnaireData.reverse();
  }
}
