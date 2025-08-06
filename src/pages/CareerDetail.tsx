import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, TrendingUp, Users, DollarSign, BookOpen, Lock } from "lucide-react";

interface CareerRecommendation {
  title: string;
  category: string;
  match: number;
  description: string;
  skills: string[];
  insight: string;
}

const CareerDetail = () => {
  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const career = location.state?.career as CareerRecommendation;
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  if (!career) {
    navigate("/");
    return null;
  }

  const handlePremiumClick = () => {
    setShowPremiumModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/results", { state: location.state })}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Results
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-4xl font-bold text-foreground">
                {career.title}
              </h1>
              <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                <Star className="h-5 w-5 text-primary" />
                <span className="font-medium text-primary">{career.match}% Match</span>
              </div>
            </div>
            
            <Badge variant="secondary" className="mb-4 text-sm">
              {career.category} Career Path
            </Badge>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {career.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Your Spark Insight
              </h3>
              <p className="text-muted-foreground italic">
                "{career.insight}"
              </p>
            </Card>
          </div>

          {/* Freemium Content */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Work Environment
              </h4>
              <p className="text-sm text-muted-foreground">
                Fast-paced, collaborative team settings with opportunities for leadership and creative problem-solving.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                Getting Started
              </h4>
              <p className="text-sm text-muted-foreground">
                Start with online courses, build a portfolio, and consider entry-level positions or internships.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Growth Potential
              </h4>
              <p className="text-sm text-muted-foreground">
                High demand field with excellent opportunities for career advancement and specialization.
              </p>
            </Card>
          </div>

          {/* Premium Content Teaser */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10 flex items-end justify-center pb-8">
              <Button onClick={handlePremiumClick} className="shadow-lg">
                <Lock className="h-4 w-4 mr-2" />
                Unlock Premium Content
              </Button>
            </div>
            
            <div className="blur-sm pointer-events-none">
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Salary Insights & Market Data
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Average Salary Range</p>
                    <p className="text-2xl font-bold">$65,000 - $120,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Job Market Growth</p>
                    <p className="text-lg font-semibold text-green-600">+15% (Above Average)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Detailed Career Roadmap</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">Foundation Building (0-1 years)</p>
                      <p className="text-sm text-muted-foreground">Essential skills and certifications</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/70 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">Skill Development (1-3 years)</p>
                      <p className="text-sm text-muted-foreground">Specialized training and experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/50 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Career Advancement (3+ years)</p>
                      <p className="text-sm text-muted-foreground">Leadership roles and expertise</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Modal */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <Card className="p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Unlock Your Full Career Potential</h3>
            <p className="text-muted-foreground mb-6">
              Get access to detailed salary data, complete career roadmaps, industry insights, and personalized action plans.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm">Comprehensive salary & market data</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm">Step-by-step career roadmaps</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm">Industry insider insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm">Personalized action plans</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1">
                Get Premium Access
              </Button>
              <Button variant="outline" onClick={() => setShowPremiumModal(false)}>
                Maybe Later
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CareerDetail;