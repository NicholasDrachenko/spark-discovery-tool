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
      
      {/* Hero Section */}
      <div className="relative z-10 text-center py-20 px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full shadow-glow animate-pulse-glow">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your 
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Career Spark
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover careers that ignite your passion and match your unique strengths. 
            Your next chapter starts with understanding who you truly are.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">15 Thoughtful Questions</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <Target className="h-5 w-5 text-green-300" />
              <span className="text-white font-medium">Personalized Results</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <Star className="h-5 w-5 text-blue-300" />
              <span className="text-white font-medium">Actionable Resources</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quiz Component */}
      <div className="relative z-10">
        <SparkQuiz />
      </div>
    </div>
  );
};

export default Index;
