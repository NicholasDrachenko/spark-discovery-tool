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

  const getCareerRoadmap = (careerTitle: string) => {
    const roadmaps: Record<string, any> = {
      "Project Manager": (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Entry Level (0-2 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Learn Agile/Scrum methodologies</li>
              <li>• Master project management tools (Jira, Asana)</li>
              <li>• Assist senior PMs with coordination</li>
              <li>• Complete PMP or CAPM certification</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Mid-Level (3-7 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Lead cross-functional project teams</li>
              <li>• Manage budgets up to $500K-$2M</li>
              <li>• Develop risk management expertise</li>
              <li>• Mentor junior project coordinators</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Senior Level (8+ years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Program management of multiple projects</li>
              <li>• Strategic portfolio planning</li>
              <li>• PMO leadership and process development</li>
              <li>• Executive stakeholder management</li>
            </ul>
          </div>
        </div>
      ),
      "Operations Analyst": (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Entry Level (0-2 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Master Excel and SQL fundamentals</li>
              <li>• Learn process mapping techniques</li>
              <li>• Support data collection and analysis</li>
              <li>• Complete Lean Six Sigma Yellow Belt</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Mid-Level (3-7 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Lead process improvement initiatives</li>
              <li>• Advanced analytics with Python/R</li>
              <li>• Design operational dashboards</li>
              <li>• Earn Six Sigma Green/Black Belt</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Senior Level (8+ years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Operations strategy development</li>
              <li>• Digital transformation leadership</li>
              <li>• Cross-departmental optimization</li>
              <li>• Build analytics teams and capabilities</li>
            </ul>
          </div>
        </div>
      ),
      "UX Designer": (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Entry Level (0-2 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Master Figma and design principles</li>
              <li>• Build portfolio with personal projects</li>
              <li>• Learn user research basics</li>
              <li>• Complete Google UX Design Certificate</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Mid-Level (3-7 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Lead end-to-end design projects</li>
              <li>• Conduct usability testing and research</li>
              <li>• Collaborate closely with developers</li>
              <li>• Specialize in mobile or web design</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Senior Level (8+ years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Design system architecture</li>
              <li>• UX strategy and team leadership</li>
              <li>• Cross-platform design standards</li>
              <li>• Influence product roadmap decisions</li>
            </ul>
          </div>
        </div>
      ),
      "Creative Director": (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Entry Level (0-2 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Master Adobe Creative Suite</li>
              <li>• Assist with campaign development</li>
              <li>• Build diverse creative portfolio</li>
              <li>• Learn brand strategy fundamentals</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Mid-Level (3-7 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Lead creative campaigns end-to-end</li>
              <li>• Manage small creative teams</li>
              <li>• Client presentation and pitching</li>
              <li>• Develop brand voice and identity</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Senior Level (8+ years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Creative vision and strategy leadership</li>
              <li>• Agency or in-house team management</li>
              <li>• Award-winning campaign development</li>
              <li>• Industry thought leadership and speaking</li>
            </ul>
          </div>
        </div>
      ),
      "Product Designer": (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Entry Level (0-2 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Learn design thinking methodology</li>
              <li>• Master prototyping tools</li>
              <li>• Assist with user research studies</li>
              <li>• Build product design portfolio</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Mid-Level (3-7 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Own product feature design cycles</li>
              <li>• Lead user testing and validation</li>
              <li>• Work closely with product managers</li>
              <li>• Contribute to design system evolution</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Senior Level (8+ years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Product design strategy and vision</li>
              <li>• Cross-functional team leadership</li>
              <li>• Startup to scale product experience</li>
              <li>• Design team mentorship and growth</li>
            </ul>
          </div>
        </div>
      ),
      "Content Creator": (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Entry Level (0-2 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Build audience on 1-2 platforms</li>
              <li>• Learn content planning and scheduling</li>
              <li>• Master basic video/photo editing</li>
              <li>• Develop your unique voice and niche</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Mid-Level (3-7 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Monetize through sponsorships</li>
              <li>• Expand to multiple content formats</li>
              <li>• Build email list and community</li>
              <li>• Create your own products/courses</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Senior Level (8+ years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Build media company or agency</li>
              <li>• Launch digital products and courses</li>
              <li>• Speaking and consulting opportunities</li>
              <li>• Mentor other creators and entrepreneurs</li>
            </ul>
          </div>
        </div>
      ),
      "Team Coach": (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Entry Level (0-2 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Complete coaching certification</li>
              <li>• Gain team leadership experience</li>
              <li>• Study group dynamics and psychology</li>
              <li>• Practice with volunteer teams</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Mid-Level (3-7 years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Coach high-performing teams</li>
              <li>• Develop custom coaching programs</li>
              <li>• Measure team performance improvements</li>
              <li>• Specialize in specific industries</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <h4 className="font-medium text-sm mb-2 text-primary">Senior Level (8+ years)</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Executive and C-suite coaching</li>
              <li>• Organizational transformation work</li>
              <li>• Train other coaches and facilitators</li>
              <li>• Thought leadership in team development</li>
            </ul>
          </div>
        </div>
      )
    };

    return roadmaps[careerTitle] || roadmaps["Project Manager"];
  };

  const getCompensationData = (careerTitle: string) => {
    const compensation: Record<string, { entry: string; mid: string; senior: string }> = {
      "Project Manager": { entry: "$55-75K", mid: "$75-110K", senior: "$110-160K+" },
      "Operations Analyst": { entry: "$50-70K", mid: "$70-100K", senior: "$100-140K+" },
      "UX Designer": { entry: "$60-80K", mid: "$80-120K", senior: "$120-180K+" },
      "Creative Director": { entry: "$45-65K", mid: "$90-130K", senior: "$130-200K+" },
      "Product Designer": { entry: "$65-85K", mid: "$85-130K", senior: "$130-200K+" },
      "Content Creator": { entry: "$30-50K", mid: "$50-100K", senior: "$100-500K+" },
      "Team Coach": { entry: "$60-80K", mid: "$80-120K", senior: "$120-180K+" }
    };

    return compensation[careerTitle] || compensation["Project Manager"];
  };

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
                {(career.freeResources || []).map((resource, index) => {
                  const getResourceUrl = (title: string, careerTitle: string) => {
                    // Map resource titles to actual URLs
                    const urlMap: Record<string, string> = {
                      "PMP Certification Guide (Free)": "https://www.pmi.org/certifications/project-management-pmp",
                      "Agile Project Management Course": "https://www.coursera.org/learn/agile-project-management",
                      "Microsoft Project Tutorial Series": "https://www.youtube.com/results?search_query=microsoft+project+tutorial",
                      "Harvard Business Review PM Articles": "https://hbr.org/topic/project-management",
                      "SQL for Data Analysis Course": "https://www.codecademy.com/learn/sql",
                      "Lean Six Sigma Yellow Belt": "https://www.sixsigmacouncil.org/six-sigma-yellow-belt/",
                      "Excel Data Analysis Toolkit": "https://support.microsoft.com/en-us/office/analyze-data-in-excel-3223aab8-f543-4fda-85ed-76bb0295ffc4",
                      "Business Process Mapping Guide": "https://www.lucidchart.com/pages/business-process-mapping",
                      "Google UX Design Certificate": "https://www.coursera.org/professional-certificates/google-ux-design",
                      "Figma Design System Tutorial": "https://www.figma.com/resource-library/design-systems/",
                      "UX Research Methods Handbook": "https://www.nngroup.com/articles/which-ux-research-methods/",
                      "Design Thinking Workshop Kit": "https://www.ideou.com/pages/design-thinking",
                      "Brand Strategy Masterclass": "https://www.futurelearn.com/courses/brand-strategy",
                      "Adobe Creative Suite Tutorials": "https://helpx.adobe.com/creative-suite.html",
                      "Creative Leadership Podcast": "https://podcasts.apple.com/us/podcast/creative-pep-talk/id923555467",
                      "Design Inspiration Gallery": "https://www.behance.net/",
                      "Product Design Sprint Guide": "https://www.gv.com/sprint/",
                      "User Testing Platform Access": "https://www.usertesting.com/",
                      "Product Design Case Studies": "https://uxplanet.org/",
                      "Wireframing Templates": "https://www.figma.com/templates/",
                      "Content Strategy Playbook": "https://contentmarketinginstitute.com/",
                      "Video Editing Crash Course": "https://www.blackmagicdesign.com/products/davinciresolve/",
                      "SEO Content Optimization": "https://moz.com/beginners-guide-to-seo",
                      "Creator Economy Newsletter": "https://creatoreconomy.so/",
                      "Team Coaching Certification": "https://coachfederation.org/",
                      "Emotional Intelligence Assessment": "https://www.psychology.org.au/for-the-public/psychology-topics/emotional-intelligence",
                      "Team Building Activity Library": "https://www.teambuilding.com/blog/team-building-exercises",
                      "Performance Management Templates": "https://www.shrm.org/resourcesandtools/tools-and-samples/pages/default.aspx"
                    };
                    return urlMap[title] || "#";
                  };
                  
                  return (
                    <a 
                      key={index} 
                      href={getResourceUrl(resource.title, career.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer hover:scale-[1.02] group"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{resource.title}</h4>
                        <p className="text-xs text-muted-foreground">{resource.description}</p>
                      </div>
                    </a>
                  );
                })}
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
                {(career.premiumResources || []).map((resource, index) => (
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
              {getCareerRoadmap(career.title)}
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
                  <div className="text-2xl font-bold text-primary">{getCompensationData(career.title).entry}</div>
                  <div className="text-xs text-muted-foreground">Entry Level</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="text-2xl font-bold text-primary">{getCompensationData(career.title).mid}</div>
                  <div className="text-xs text-muted-foreground">Mid Level</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <div className="text-2xl font-bold text-primary">{getCompensationData(career.title).senior}</div>
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