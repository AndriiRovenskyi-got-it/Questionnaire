import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionManagementPageComponent } from './components/question-management-page/question-management-page.component';
import { CreateQuestionPageComponent } from './components/create-question-page/create-question-page.component';
import { QuestionEditPageComponent } from './components/question-edit-page/question-edit-page.component';
import { QuestionsListsPageComponent } from './components/questions-lists-page/questions-lists-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuestionManagementPageComponent,
    CreateQuestionPageComponent,
    QuestionEditPageComponent,
    QuestionsListsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
