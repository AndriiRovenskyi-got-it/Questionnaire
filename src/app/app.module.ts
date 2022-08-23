import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionManagementPageComponent } from './components/question-management-page/question-management-page.component';
import { QuestionsListsPageComponent } from './components/questions-lists-page/questions-lists-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEditQuestionPageComponent } from './components/create-edit-question-page/create-edit-question-page.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionManagementPageComponent,
    CreateEditQuestionPageComponent,
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
