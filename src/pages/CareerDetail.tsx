import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, BookOpen, Crown, Lock, Sparkles, MapPin, Clock, TrendingUp, Users, DollarSign } from "lucide-react";

interface CareerRecommendation {
  title: string;
  category: string;
  match: number;
  description: string;
  skills: string[];
  insight: string;
  freeResources: { title: string; description: string; }[];
  premiumResources: { title: string; description: string; }[];
}

const CareerDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const career = location.state?.career as CareerRecommendation;

  if (!career) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/results", { state: { answers: location.state?.answers } })}
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

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Free Resources */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Free Resources</h3>
              </div>
              <div className="space-y-3">
                {career.freeResources.map((resource, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm">{resource.title}</h4>
                      <p className="text-xs text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Premium Resources */}
            <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Premium Unlock</h3>
                <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary">Pro</Badge>
              </div>
              <div className="space-y-3">
                {career.premiumResources.map((resource, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-primary/10">
                    <Lock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm">{resource.title}</h4>
                      <p className="text-xs text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="default" className="w-full mt-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                <Sparkles className="h-4 w-4 mr-2" />
                Unlock Premium Access
              </Button>
            </Card>
          </div>

          {/* Deep Dive Exploration Sections */}
          <div className="space-y-8">
            {/* Career Path Roadmap */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Career Path Roadmap
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-muted/30">
                  <h4 className="font-medium text-sm mb-2 text-primary">Entry Level (0-2 years)</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Build foundational skills</li>
                    <li>• Learn industry tools</li>
                    <li>• Work under supervision</li>
                    <li>• Complete certification courses</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-muted/30">
                  <h4 className="font-medium text-sm mb-2 text-primary">Mid-Level (3-7 years)</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Take on complex projects</li>
                    <li>• Mentor junior team members</li>
                    <li>• Specialize in niche areas</li>
                    <li>• Lead small teams</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-muted/30">
                  <h4 className="font-medium text-sm mb-2 text-primary">Senior Level (8+ years)</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Strategic decision making</li>
                    <li>• Department leadership</li>
                    <li>• Industry thought leadership</li>
                    <li>• Cross-functional collaboration</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Day in the Life */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                A Day in the Life
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
                  <span className="text-xs font-medium text-primary min-w-[60px]">9:00 AM</span>
                  <span className="text-sm">Review project status and priorities for the day</span>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
                  <span className="text-xs font-medium text-primary min-w-[60px]">10:00 AM</span>
                  <span className="text-sm">Team standup meeting and collaboration session</span>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
                  <span className="text-xs font-medium text-primary min-w-[60px]">11:30 AM</span>
                  <span className="text-sm">Deep work on core {career.title.toLowerCase()} tasks</span>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
                  <span className="text-xs font-medium text-primary min-w-[60px]">2:00 PM</span>
                  <span className="text-sm">Client/stakeholder meetings and feedback sessions</span>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-muted/30">
                  <span className="text-xs font-medium text-primary min-w-[60px]">4:00 PM</span>
                  <span className="text-sm">Documentation, planning, and skill development</span>
                </div>
              </div>
            </Card>

            {/* Industry Insights */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Industry Outlook
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Growth Trends</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Remote work opportunities increasing</li>
                    <li>• AI/automation changing skill requirements</li>
                    <li>• Growing demand for specialized expertise</li>
                    <li>• Cross-functional collaboration emphasis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Future Skills</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Digital literacy and tech adaptation</li>
                    <li>• Emotional intelligence and leadership</li>
                    <li>• Data analysis and interpretation</li>
                    <li>• Creative problem-solving approaches</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Networking & Community */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Professional Community
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Professional Organizations</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="p-2 rounded bg-muted/30">Industry Association of {career.category}s</div>
                    <div className="p-2 rounded bg-muted/30">Professional {career.title} Network</div>
                    <div className="p-2 rounded bg-muted/30">Global {career.category} Alliance</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Online Communities</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="p-2 rounded bg-muted/30">Reddit r/{career.title.replace(' ', '').toLowerCase()}</div>
                    <div className="p-2 rounded bg-muted/30">LinkedIn {career.title} Groups</div>
                    <div className="p-2 rounded bg-muted/30">Discord Communities & Slack Channels</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Salary & Benefits Insights */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Compensation Overview
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="text-2xl font-bold text-primary">$45-65K</div>
                  <div className="text-xs text-muted-foreground">Entry Level</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="text-2xl font-bold text-primary">$65-95K</div>
                  <div className="text-xs text-muted-foreground">Mid Level</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="text-2xl font-bold text-primary">$95-150K+</div>
                  <div className="text-xs text-muted-foreground">Senior Level</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Ranges vary by location, company size, and industry. Remote positions may offer different compensation structures.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;