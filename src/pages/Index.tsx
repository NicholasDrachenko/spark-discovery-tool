import { SparkQuiz } from "@/components/SparkQuiz";
import { Sparkles, Zap, Target, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Quiz Component */}
      <div className="relative z-10">
        <SparkQuiz />
      </div>
    </div>
  );
};

export default Index;
