import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizQuestionComponent } from "./QuizQuestion";
import { quizData } from "./QuizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, RotateCcw, Trophy, Sparkles } from "lucide-react";

interface QuizAnswer {
  questionId: number;
  optionIndex: number;
}

export const SparkQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  const handleAnswerSelected = (questionId: number, optionIndex: number) => {
    const existingAnswerIndex = answers.findIndex(a => a.questionId === questionId);
    
    if (existingAnswerIndex >= 0) {
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = { questionId, optionIndex };
      setAnswers(updatedAnswers);
    } else {
      setAnswers([...answers, { questionId, optionIndex }]);
    }

    // Show feedback after selection
    setTimeout(() => setShowFeedback(true), 300);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizStarted(false);
    setQuizCompleted(false);
    setShowFeedback(false);
  };

  const getCurrentAnswer = () => {
    const answer = answers.find(a => a.questionId === currentQuestion.id);
    return answer?.optionIndex;
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-float mb-8">
            <Zap className="h-24 w-24 text-primary-foreground mx-auto mb-6 animate-pulse-glow" />
          </div>
          
          <h1 className="text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
            Spark
          </h1>
          
          <p className="text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Discover your career superpowers. Take our fun, insightful test and find out what career path sparks your passion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Sparkles className="h-5 w-5" />
              <span>15 thoughtful questions</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Trophy className="h-5 w-5" />
              <span>Personalized insights</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Zap className="h-5 w-5" />
              <span>Find your spark</span>
            </div>
          </div>
          
          <Button 
            variant="hero"
            size="xl"
            onClick={() => setQuizStarted(true)}
            className="shadow-glow animate-pulse-glow"
          >
            Start Your Journey
            <Zap className="h-6 w-6" />
          </Button>
          
          <p className="text-sm text-primary-foreground/60 mt-6">
            Takes about 5 minutes • No signup required
          </p>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-float mb-8">
            <Trophy className="h-24 w-24 text-primary-foreground mx-auto mb-6 animate-pulse-glow" />
          </div>
          
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">
            Your Spark Journey Complete!
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Congratulations! You've explored 15 unique perspectives about your work style and discovered insights that can guide your career path.
          </p>
          
           <Button
            onClick={() => navigate("/results", { state: { answers } })}
            className="p-8 shadow-glow gradient-spark max-w-2xl mx-auto transition-all duration-300 hover:scale-105 active:scale-95 h-auto"
            variant="ghost"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-foreground mb-2">
                ✨ Let's See Those Results! ✨
              </h3>
              <p className="text-primary-foreground/90 text-lg">
                Your personalized career insights are ready
              </p>
            </div>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8 pb-16">
        <QuizQuestionComponent
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quizData.length}
          onAnswerSelected={handleAnswerSelected}
          onNext={handleNext}
          selectedOption={getCurrentAnswer()}
          showFeedback={showFeedback}
        />
      </div>
    </div>
  );
};