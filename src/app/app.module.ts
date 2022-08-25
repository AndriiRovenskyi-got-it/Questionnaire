import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionManagementPageComponent } from './pages/question-management-page/question-management-page.component';
import { QuestionsListsPageComponent } from './pages/questions-lists-page/questions-lists-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEditQuestionPageComponent } from './pages/create-edit-question-page/create-edit-question-page.component';
import { OpenAnswerComponent } from './components/open-answer/open-answer.component';
import { SingleAnswerComponent } from './components/single-answer/single-answer.component';
import { MultipleAnswerComponent } from './components/multiple-answer/multiple-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionManagementPageComponent,
    CreateEditQuestionPageComponent,
    QuestionsListsPageComponent,
    OpenAnswerComponent,
    SingleAnswerComponent,
    MultipleAnswerComponent
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
