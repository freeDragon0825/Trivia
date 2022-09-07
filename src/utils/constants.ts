export const API_BASE = 'https://opentdb.com/api.php';

// Quiz constants
export const QUIZ_AMOUNT = 10;
export const QUIZ_DIFFICULTY = 'hard';
export const QUIZ_TYPE = 'boolean';

export enum AnswerState {
  NoAnswer,
  Correct,
  Incorrect,
}

export type QuizType = {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}
