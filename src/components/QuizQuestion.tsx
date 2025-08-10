import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuizQuestion as QuizQuestionType, QuizOption } from "./QuizData";
import { Zap, ChevronRight, Sparkles } from "lucide-react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSelected: (questionId: number, optionIndex: number) => void;
  onNext: () => void;
  selectedOption?: number;
  showFeedback?: boolean;
}

export const QuizQuestionComponent = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSelected,
  onNext,
  selectedOption,
  showFeedback = false
}: QuizQuestionProps) => {
  const [localSelected, setLocalSelected] = useState<number | undefined>(undefined);

  const handleOptionSelect = (optionIndex: number) => {
    setLocalSelected(optionIndex);
    onAnswerSelected(question.id, optionIndex);
  };

  const selectedOptionData = localSelected !== undefined ? question.options[localSelected] : null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Question */}
      <Card className="mb-8 p-8 shadow-spark border-2">
        <div className="flex items-start gap-4">
          <div className="gradient-spark p-3 rounded-full animate-pulse-glow">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {question.question}
            </h2>
            <p className="text-muted-foreground">
              Choose the option that resonates most with you
            </p>
          </div>
        </div>
      </Card>

      {/* Options */}
      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="choice"
            className={`w-full justify-start relative ${
              localSelected === index ? 'border-primary bg-primary/5 scale-102' : ''
            }`}
            onClick={() => handleOptionSelect(index)}
          >
            <div className="flex items-start gap-4 w-full">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                localSelected === index 
                  ? 'border-primary bg-primary' 
                  : 'border-muted-foreground'
              }`}>
                {localSelected === index && (
                  <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                )}
              </div>
              <span className="text-base font-medium text-left">
                {option.text}
              </span>
            </div>
          </Button>
        ))}
      </div>

      {/* Feedback */}
      <div className="mb-8 min-h-[120px]">
        {selectedOptionData && (
          <Card className="p-6 gradient-secondary animate-fade-in">
            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-secondary-foreground mt-1 animate-spin" />
              <div>
                <h3 className="text-lg font-semibold text-secondary-foreground mb-2">
                  Your Spark Insight
                </h3>
                <p className="text-secondary-foreground leading-relaxed">
                  {selectedOptionData.feedback}
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Next Button */}
      {localSelected !== undefined && (
        <div className="flex justify-center">
          <Button 
            variant="spark" 
            size="xl"
            onClick={onNext}
          >
            {questionNumber === totalQuestions ? 'Complete Quiz' : 'Next Question'}
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
};