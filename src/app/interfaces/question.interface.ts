export interface IQuestion {
  id: number;
  questionText: string;
  type: string;
  answers: string | string[];
  creationDate:Date
}
