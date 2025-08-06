import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Sparkles, ArrowRight, Star } from "lucide-react";

interface QuizAnswer {
  questionId: number;
  optionIndex: number;
}

interface CareerRecommendation {
  title: string;
  category: string;
  match: number;
  description: string;
  skills: string[];
  insight: string;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers as QuizAnswer[] || [];
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);

  useEffect(() => {
    if (answers.length === 0) {
      navigate("/");
      return;
    }

    // Analyze answers and generate recommendations
    const analysis = analyzeAnswers(answers);
    setRecommendations(analysis);
  }, [answers, navigate]);

  const analyzeAnswers = (answers: QuizAnswer[]): CareerRecommendation[] => {
    // Based on the chart, categorize answers into Organizer, Creator, Connector
    const categoryScores = { Organizer: 0, Creator: 0, Connector: 0 };
    
    // Sample analysis logic based on the chart patterns
    answers.forEach((answer) => {
      // This is a simplified mapping - in reality you'd map each question/answer to categories
      const questionId = answer.questionId;
      const optionIndex = answer.optionIndex;
      
      // Example mapping based on common patterns in the chart
      if (questionId <= 5) {
        if (optionIndex === 0) categoryScores.Organizer += 2;
        else if (optionIndex === 1) categoryScores.Creator += 2;
        else categoryScores.Connector += 2;
      } else if (questionId <= 10) {
        if (optionIndex === 0) categoryScores.Creator += 2;
        else if (optionIndex === 1) categoryScores.Organizer += 2;
        else categoryScores.Connector += 2;
      } else {
        if (optionIndex === 0) categoryScores.Connector += 2;
        else if (optionIndex === 1) categoryScores.Organizer += 2;
        else categoryScores.Creator += 2;
      }
    });

    // Generate recommendations based on top categories
    const sortedCategories = Object.entries(categoryScores)
      .sort(([,a], [,b]) => b - a);

    const careersByCategory = {
      Organizer: [
        {
          title: "Project Manager",
          description: "Lead teams and organize complex projects from start to finish",
          skills: ["Planning", "Leadership", "Communication", "Problem-solving", "Risk Management"],
          insight: "Organization is your superpower — the future loves planners like you."
        },
        {
          title: "Operations Analyst",
          description: "Optimize business processes and improve operational efficiency",
          skills: ["Data Analysis", "Process Improvement", "Strategic Thinking", "Excel/SQL", "Project Management"],
          insight: "You're wired for puzzle-solving. Obstacles are your invitation."
        },
        {
          title: "UX Designer",
          description: "Design user-friendly interfaces and improve user experiences",
          skills: ["Design Thinking", "User Research", "Prototyping", "Figma/Sketch", "Information Architecture"],
          insight: "That's big innovative thinking — not all imagination leaps."
        }
      ],
      Creator: [
        {
          title: "Creative Director",
          description: "Lead creative teams and develop innovative brand strategies",
          skills: ["Creative Vision", "Brand Strategy", "Team Leadership", "Adobe Creative Suite", "Marketing"],
          insight: "You build things that matter. That's rare and powerful."
        },
        {
          title: "Product Designer",
          description: "Design and develop new products that solve real problems",
          skills: ["Product Development", "Design Thinking", "Innovation", "User Testing", "Wireframing"],
          insight: "Purpose drives you — and purpose doesn't feel it."
        },
        {
          title: "Content Creator",
          description: "Create engaging content across various digital platforms",
          skills: ["Storytelling", "Visual Design", "Social Media", "Video Editing", "SEO/Analytics"],
          insight: "You thrive in your inner world — that's where breakthroughs begin."
        }
      ],
      Connector: [
        {
          title: "Team Coach",
          description: "Help teams improve performance and achieve their goals",
          skills: ["Coaching", "Team Building", "Communication", "Emotional Intelligence", "Performance Management"],
          insight: "Your energy lifts the room. That's leadership in motion."
        },
        {
          title: "Community Manager",
          description: "Build and nurture online and offline communities",
          skills: ["Community Building", "Social Media", "Relationship Building", "Event Planning", "Content Strategy"],
          insight: "You understand that great work doesn't happen in a vacuum."
        },
        {
          title: "Facilitator",
          description: "Guide groups through processes and help them reach decisions",
          skills: ["Group Facilitation", "Active Listening", "Conflict Resolution", "Workshop Design", "Change Management"],
          insight: "You're a bridge — and that's a rare gift."
        }
      ]
    };

    // Return top recommendations with match percentages
    const topRecommendations: CareerRecommendation[] = [];
    const totalScore = Object.values(categoryScores).reduce((sum, score) => sum + score, 0);
    
    sortedCategories.forEach(([category, score], index) => {
      const careers = careersByCategory[category as keyof typeof careersByCategory];
      const baseMatchPercentage = Math.round((score / totalScore) * 100);
      
      careers.slice(0, index === 0 ? 3 : 2).forEach((career, careerIndex) => {
        // Add some variation to make percentages more realistic
        const variation = Math.floor(Math.random() * 10) - 5; // -5 to +5
        const matchPercentage = Math.max(
          Math.min(baseMatchPercentage - (careerIndex * 3) + variation, 98), 
          75
        );
        
        topRecommendations.push({
          ...career,
          category,
          match: matchPercentage
        });
      });
    });

    return topRecommendations.slice(0, 6);
  };

  const handleCareerClick = (career: CareerRecommendation) => {
    navigate(`/career/${encodeURIComponent(career.title)}`, { state: { career } });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="animate-float mb-6">
            <Trophy className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-glow" />
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Your Career Spark Results
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your answers, here are the careers that best match your work style and interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recommendations.map((career, index) => (
            <Card 
              key={career.title}
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover-scale"
              onClick={() => handleCareerClick(career)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {career.title}
                  </h3>
                  <Badge variant="secondary" className="mb-2">
                    {career.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{career.match}%</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {career.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {career.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Click to learn more
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Want deeper insights and more career options?
          </p>
          <Button variant="outline" className="mr-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Upgrade to Premium
          </Button>
          <Button variant="ghost" onClick={() => navigate("/")}>
            Take Quiz Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;