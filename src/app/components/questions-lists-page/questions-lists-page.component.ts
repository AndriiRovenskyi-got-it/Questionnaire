import { Component, OnDestroy, OnInit } from '@angular/core';
import { IQuestion } from '../../interfaces/question.interface';

@Component({
  selector: 'app-questions-lists-page',
  templateUrl: './questions-lists-page.component.html',
  styleUrls: ['./questions-lists-page.component.scss']
})
export class QuestionsListsPageComponent implements OnInit, OnDestroy {

  questionnaireData!: IQuestion[];
  alphabetArray = ['A', 'B', 'C', 'D', 'E'];

  ngOnInit(): void {
    if (localStorage.getItem('questionnaireData')) {
      this.questionnaireData = JSON.parse(localStorage.getItem('questionnaireData')!);
    }
  }

  addOpenAnswer(e: Event, id: number) {
    this.questionnaireData[this.findIndex(id)].userAnswer = (e.target as HTMLTextAreaElement).value;
  }

  disableExpression(question: IQuestion) {
    return !question.userAnswer
      || (question.type === 'open' && question!.userAnswer.length < 1)
      || (question.type === 'open' && question!.userAnswer.length > 255)
      || (question.type === 'single choice' && question!.userAnswer.length > 1)
      || (question.type === 'multiple choice' && question!.userAnswer.length < 2);
  }

  addSelectAnswer(e: Event, id: number, answer: string) {
    let index = this.findIndex(id);
    if ((e.target as HTMLInputElement).checked) {
      if (!this.questionnaireData[index].userAnswer) {
        this.questionnaireData[index].userAnswer = [];
      }
      this.questionnaireData[index].userAnswer.push(answer);
    } else {
      this.questionnaireData[index].userAnswer = this.questionnaireData[index].userAnswer
        .filter((item: string) => item !== answer);
    }
  }

  findIndex(id: number): number {
    let index = 0;
    this.questionnaireData.forEach((item, i) => {
      if (item.id === id) {
        index = i;
      }
    });
    return index;
  }

  resetQuestion(id: number) {
    this.questionnaireData[this.findIndex(id)].answerStatus = false;
    delete this.questionnaireData[this.findIndex(id)].userAnswer;
  }

  ngOnDestroy(): void {
    localStorage.setItem('questionnaireData', JSON.stringify(this.questionnaireData));
  }
}
