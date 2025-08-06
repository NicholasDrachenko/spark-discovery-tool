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
          onClick={() => navigate(-1)}
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

          {/* Free Resources */}
          <Card className="p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Free Resources to Get Started
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">📚 Books & Reading</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "The Lean Startup" by Eric Ries</li>
                  <li>• "Design of Everyday Things" by Don Norman</li>
                  <li>• Harvard Business Review articles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">🎥 Videos & Lectures</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Coursera free audit courses</li>
                  <li>• YouTube channel recommendations</li>
                  <li>• TED Talks on leadership</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">🌐 Online Communities</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Reddit communities</li>
                  <li>• LinkedIn professional groups</li>
                  <li>• Discord study groups</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">🛠️ Free Tools</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Figma (design)</li>
                  <li>• Notion (organization)</li>
                  <li>• Google Analytics (data)</li>
                </ul>
              </div>
            </div>
          </Card>

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
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Average Salary Range</p>
                    <p className="text-2xl font-bold">$65,000 - $120,000</p>
                    <p className="text-sm text-muted-foreground mt-1">Based on location and experience</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Job Market Growth</p>
                    <p className="text-lg font-semibold text-green-600">+15% (Above Average)</p>
                    <p className="text-sm text-muted-foreground mt-1">Next 5-year projection</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Premium Learning Path (12 Months)</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div className="flex-1">
                      <p className="font-medium">Foundation Building (Months 1-3)</p>
                      <p className="text-sm text-muted-foreground mb-2">Essential skills and certifications</p>
                      <div className="text-xs text-muted-foreground">
                        • Custom study templates • Progress tracker • Weekly mentorship calls
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/70 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div className="flex-1">
                      <p className="font-medium">Skill Development (Months 4-8)</p>
                      <p className="text-sm text-muted-foreground mb-2">Specialized training and portfolio building</p>
                      <div className="text-xs text-muted-foreground">
                        • Project templates • Industry insider interviews • Portfolio reviews
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/50 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div className="flex-1">
                      <p className="font-medium">Career Launch (Months 9-12)</p>
                      <p className="text-sm text-muted-foreground mb-2">Job search strategy and networking</p>
                      <div className="text-xs text-muted-foreground">
                        • Interview prep • Salary negotiation guide • Industry networking events
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Exclusive Premium Content</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">📊 Personal Goal Trackers</h4>
                    <p className="text-sm text-muted-foreground">Custom templates to track your progress and set meaningful milestones</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🎯 Industry Templates</h4>
                    <p className="text-sm text-muted-foreground">Ready-to-use templates for portfolios, resumes, and project planning</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🤝 Mentorship Access</h4>
                    <p className="text-sm text-muted-foreground">Monthly 1-on-1 calls with industry professionals</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🏢 Conference Access</h4>
                    <p className="text-sm text-muted-foreground">Exclusive invites to virtual industry conferences and networking events</p>
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