import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
  alphabetArray = ['A', 'B', 'C', 'D', 'E'];
  form!: FormGroup;
  showAnswersField = false;
  answersFormArray!: AbstractControl[];

  constructor(private questionnaireService: QuestionnaireService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      questionText: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      answers: new FormArray([
        new FormControl('', Validators.required),
        new FormControl('', Validators.required)
      ]),
    });

    this.answersFormArray = (this.form.controls['answers'] as FormArray).controls;

    if (history.state.question) {
      this.form.controls['questionText'].setValue(history.state.question.questionText);
      this.form.controls['type'].setValue(history.state.question.type);
      history.state.question.answers.forEach((answer: string, index: number) => {
        if (index < 2) {
          this.answersFormArray[index].setValue(answer);
        } else {
          (this.form.controls['answers'] as FormArray).push(new FormControl(answer, Validators.required));
        }
      });
      this.showAnswersField = history.state.question.type === 'single choice' || history.state.question.type === 'multiple choice';
    }

  }

  onSubmit() {
    const questionObj: IQuestionPart = this.form.value;
    if (history.state.question) {
      this.questionnaireService.editQuestion(questionObj, history.state.question.id);
    } else {
      this.questionnaireService.addQuestion(questionObj);
    }
    this.router.navigate(['/management-question']);
  }

  onRadioBtnChange(type: string) {
    this.showAnswersField = type === 'single choice' || type === 'multiple choice';
    if(type !== 'open'){
      this.showAnswersField = true
    }else{
      (this.form.controls['answers'] as FormArray).controls.forEach((control)=>{
        control.valid
      })
    }
  }

  removeAnswerControl(index: number) {
    if ((this.form.controls['answers'] as FormArray).controls.length > 2) {
      (this.form.controls['answers'] as FormArray).removeAt(index);
    }
  }

  addAnswerControl() {
    if ((this.form.controls['answerOptions'] as FormArray).controls.length < 5) {
      (this.form.controls['answerOptions'] as FormArray).push(new FormControl('', Validators.required));
    }
  }
}
