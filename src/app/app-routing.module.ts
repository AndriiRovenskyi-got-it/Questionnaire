import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionManagementPageComponent } from './pages/question-management-page/question-management-page.component';
import { QuestionsListsPageComponent } from './pages/questions-lists-page/questions-lists-page.component';
import { CreateEditQuestionPageComponent } from './pages/create-edit-question-page/create-edit-question-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'management-question', pathMatch: 'full' },
  { path: 'management-question', component: QuestionManagementPageComponent },
  { path: 'create-question', component: CreateEditQuestionPageComponent},
  { path: 'edit-question/:id', component: CreateEditQuestionPageComponent },
  { path: 'list-question', component: QuestionsListsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
