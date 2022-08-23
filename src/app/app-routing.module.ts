import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionPageComponent } from './components/create-question-page/create-question-page.component';
import { QuestionEditPageComponent } from './components/question-edit-page/question-edit-page.component';
import {
  QuestionManagementPageComponent
} from './components/question-management-page/question-management-page.component';
import { QuestionsListsPageComponent } from './components/questions-lists-page/questions-lists-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'management-question', pathMatch: 'full' },
  { path: 'management-question', component: QuestionManagementPageComponent },
  { path: 'create-question', component: CreateQuestionPageComponent },
  { path: 'edit-question', component: QuestionEditPageComponent },
  { path: 'list-question', component: QuestionsListsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
