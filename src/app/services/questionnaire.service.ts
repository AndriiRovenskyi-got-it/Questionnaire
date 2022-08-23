import { Injectable } from '@angular/core';
import { IQuestion } from '../interfaces/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  questionnaireData: IQuestion[] = [
    {
      id: 1,
      questionText: 'question 1',
      type: 'single choice',
      answers: 'answer 1',
      creationDate: new Date
    },
    {
      id: 2,
      questionText: 'question 2',
      type: 'multiple choice',
      answers: ['answer a', 'answer b'],
      creationDate: new Date
    },
    {
      id: 3,
      questionText: 'question 3',
      type: 'open',
      answers: 'open answer 3',
      creationDate: new Date
    },
  ];

  constructor() {
  }

  deleteQuestion(id: number):IQuestion[] {
    this.questionnaireData = this.questionnaireData.filter(item => item.id !== id);
    return this.questionnaireData
  }
}
