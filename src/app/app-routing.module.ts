import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionManagementPageComponent } from './components/question-management-page/question-management-page.component';
import { QuestionsListsPageComponent } from './components/questions-lists-page/questions-lists-page.component';
import { CreateEditQuestionPageComponent } from './components/create-edit-question-page/create-edit-question-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'management-question', pathMatch: 'full' },
  { path: 'management-question', component: QuestionManagementPageComponent },
  { path: 'create-question', component: CreateEditQuestionPageComponent},
  { path: 'edit-question', component: CreateEditQuestionPageComponent },
  { path: 'list-question', component: QuestionsListsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
