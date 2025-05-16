
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { questions, Question } from '../data/testQuestions';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const Test: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const currentQuestion: Question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (type: string) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: type };
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate MBTI result
      const result = calculateMbtiType(newAnswers);
      
      // Show a toast notification
      toast.success("Tes selesai! Melihat hasil...");
      
      // Navigate to results page with the MBTI type
      navigate(`/hasil/${result}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateMbtiType = (answers: Record<string, string>): string => {
    // Count occurrences of each letter
    let counts = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    Object.values(answers).forEach(type => {
      counts[type as keyof typeof counts]++;
    });

    // Determine the dominant letter in each pair
    const e_i = counts.E > counts.I ? 'E' : 'I';
    const s_n = counts.S > counts.N ? 'S' : 'N';
    const t_f = counts.T > counts.F ? 'T' : 'F';
    const j_p = counts.J > counts.P ? 'J' : 'P';

    // Return the four-letter MBTI type
    return e_i + s_n + t_f + j_p;
  };

  return (
    <Layout>
      <section className="py-16 min-h-screen bg-gradient-to-br from-white via-mbti-blue to-mbti-purple bg-opacity-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Pertanyaan {currentQuestionIndex + 1} dari {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-mbti-deep-purple h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            
            {/* Question card */}
            <div className="mbti-card">
              <h2 className="text-2xl font-semibold mb-6">{currentQuestion.text}</h2>
              
              <div className="space-y-4">
                <button
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-mbti-purple hover:border-mbti-deep-purple transition-all duration-200"
                  onClick={() => handleAnswer(currentQuestion.options.a.type)}
                >
                  <span className="font-medium">A:</span> {currentQuestion.options.a.text}
                </button>
                
                <button
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-mbti-purple hover:border-mbti-deep-purple transition-all duration-200"
                  onClick={() => handleAnswer(currentQuestion.options.b.type)}
                >
                  <span className="font-medium">B:</span> {currentQuestion.options.b.text}
                </button>
              </div>
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <button
                  className={`mbti-button-secondary ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Sebelumnya
                </button>
                
                {/* Skip button (optional) */}
                {currentQuestionIndex < questions.length - 1 && (
                  <button
                    className="text-gray-500 hover:text-mbti-deep-purple transition-colors"
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                  >
                    Lewati
                  </button>
                )}
              </div>
            </div>
            
            {/* Test description */}
            <div className="mt-8 text-center text-gray-600">
              <p>
                Jawab sesuai dengan apa yang benar-benar menggambarkan dirimu, bukan apa yang kamu anggap "seharusnya" benar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Test;
