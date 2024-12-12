import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string | boolean) => void;
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuestionCard({ 
  question, 
  onAnswer, 
  currentQuestion, 
  totalQuestions 
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4 text-sm text-gray-500">
        Pertanyaan {currentQuestion} dari {totalQuestions}
      </div>
      <h2 className="text-xl font-semibold mb-8">{question.question}</h2>
      
      {question.type === 'multipleChoice' ? (
        <div className="space-y-4">
          {Object.entries(question.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => onAnswer(key)}
              className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold">{key}.</span> {value}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => onAnswer(true)}
            className="flex-1 bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Benar
          </button>
          <button
            onClick={() => onAnswer(false)}
            className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Salah
          </button>
        </div>
      )}
    </div>
  );
}
