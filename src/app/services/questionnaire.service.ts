import { Injectable } from '@angular/core';
import { IQuestion, IQuestionPart } from '../interfaces/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  questionnaireData: IQuestion[] = [];

  deleteQuestion(id: number): IQuestion[] {
    this.questionnaireData = this.questionnaireData.filter(item => item.id !== id);
    localStorage.setItem('questionnaireData', JSON.stringify(this.questionnaireData));
    return [...this.questionnaireData];
  }

  addQuestion(newQuestion: IQuestionPart) {
    let newId;
    if (this.questionnaireData.length) {
      newId = this.questionnaireData[0].id + 1;
    } else {
      newId = 1;
    }
    let tempQuestion = { id: newId, ...newQuestion, answers: [], creationDate: new Date() };
    this.questionnaireData.unshift(tempQuestion);
    localStorage.setItem('questionnaireData', JSON.stringify(this.questionnaireData));
  }

  editQuestion(editedQuestion: IQuestionPart, editedId: number) {
    let tempQuestion = { id: editedId, ...editedQuestion, answers: [], creationDate: new Date() };
    this.questionnaireData.forEach((item, index) => {
      if (item.id === editedId) {
        this.questionnaireData[index] = tempQuestion;
      }
    });
    localStorage.setItem('questionnaireData', JSON.stringify(this.questionnaireData));
  }
}
