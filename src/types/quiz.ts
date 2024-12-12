export type QuestionType = 'multipleChoice' | 'trueFalse';

export interface BaseQuestion {
  id: number;
  question: string;
  type: QuestionType;
  explanation?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multipleChoice';
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: 'a' | 'b' | 'c' | 'd';
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'trueFalse';
  correctAnswer: boolean;
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion;

export interface UserAnswer {
  questionId: number;
  userAnswer: boolean | string;
  isCorrect: boolean;
}
