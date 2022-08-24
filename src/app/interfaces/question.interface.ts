export interface IQuestion {
  id: number;
  questionText: string;
  type: string;
  answers: string[];
  creationDate: Date;
}

export interface IQuestionPart {
  questionText: string;
  type: string;
  answers: string[];
}
