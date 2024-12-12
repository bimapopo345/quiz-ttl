import { useState } from 'react';
import './index.css';
import { questions } from './data/questions';
import { UserAnswer } from './types/quiz';
import QuestionCard from './components/QuestionCard';
import Results from './components/Results';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleAnswer = (answer: boolean | string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    setUserAnswers([
      ...userAnswers,
      {
        questionId: currentQuestion.id,
        userAnswer: answer,
        isCorrect,
      },
    ]);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsQuizComplete(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
      {!isQuizComplete ? (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />
      ) : (
        <Results userAnswers={userAnswers} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
