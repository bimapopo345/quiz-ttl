import { RotateCcw } from 'lucide-react';
import { UserAnswer } from '../types/quiz';
import { questions } from '../data/questions';

interface ResultsProps {
  userAnswers: UserAnswer[];
  onReset: () => void;
}

export default function Results({ userAnswers, onReset }: ResultsProps) {
  const score = (userAnswers.filter(answer => answer.isCorrect).length / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Hasil Quiz</h2>
      <div className="text-4xl font-bold text-center mb-8">
        {score.toFixed(0)}%
      </div>

      <h3 className="text-lg font-semibold mb-4">Review Semua Jawaban:</h3>
      <div className="space-y-4 mb-8">
        {userAnswers.map(answer => {
          const question = questions.find(q => q.id === answer.questionId);
          const isCorrect = answer.isCorrect;
          
          if (!question) return null;

          return (
            <div 
              key={answer.questionId} 
              className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}
            >
              <p className="font-medium">{question.question}</p>
              
              {question.type === 'multipleChoice' ? (
                <>
                  <p className="text-sm mt-2">
                    Jawaban Anda: {question.options[answer.userAnswer as keyof typeof question.options]}
                  </p>
                  <p className={`text-sm mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    Jawaban yang benar: {question.options[question.correctAnswer]}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm mt-2">
                    Jawaban Anda: {answer.userAnswer ? 'Benar' : 'Salah'}
                  </p>
                  <p className={`text-sm mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    Jawaban yang benar: {question.correctAnswer ? 'Benar' : 'Salah'}
                  </p>
                </>
              )}
              
              {question.explanation && (
                <p className="text-sm mt-2 text-gray-600">
                  Penjelasan: {question.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={onReset}
        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        <RotateCcw size={20} />
        Mulai Ulang Quiz
      </button>
    </div>
  );
}
