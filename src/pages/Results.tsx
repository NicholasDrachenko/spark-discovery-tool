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
    
    // Detailed mapping based on the chart and quiz questions
    answers.forEach((answer) => {
      const questionId = answer.questionId;
      const optionIndex = answer.optionIndex;
      
      // Map each question to specific categories based on the nature of responses
      switch (questionId) {
        case 1: // How do you start a project?
          if (optionIndex === 0) categoryScores.Organizer += 3; // checklist/timeline
          else if (optionIndex === 1) categoryScores.Creator += 3; // sketch/explore
          else categoryScores.Connector += 3; // talk to others
          break;
        case 2: // What's exciting in a job?
          if (optionIndex === 0) categoryScores.Organizer += 2; // solving problems
          else if (optionIndex === 1) categoryScores.Creator += 3; // creating meaningful
          else categoryScores.Connector += 3; // being part of something bigger
          break;
        case 3: // Energy source
          if (optionIndex === 0) categoryScores.Creator += 2; // alone with thoughts
          else if (optionIndex === 1) categoryScores.Connector += 3; // around others
          else categoryScores.Organizer += 2; // flow between
          break;
        case 4: // Vague idea handling
          if (optionIndex === 0) categoryScores.Organizer += 3; // map it out
          else if (optionIndex === 1) categoryScores.Creator += 3; // spin into unexpected
          else categoryScores.Connector += 2; // ask questions
          break;
        case 5: // Productive environment
          if (optionIndex === 0) categoryScores.Creator += 2; // quiet/calm
          else if (optionIndex === 1) categoryScores.Creator += 2; // energetic/spontaneous
          else categoryScores.Connector += 3; // supportive/mission-driven
          break;
        case 6: // New task approach
          if (optionIndex === 0) categoryScores.Organizer += 3; // research first
          else if (optionIndex === 1) categoryScores.Creator += 3; // experiment
          else categoryScores.Connector += 2; // ask others
          break;
        case 7: // Personal phrase
          if (optionIndex === 0) categoryScores.Organizer += 3; // organize chaos
          else if (optionIndex === 1) categoryScores.Creator += 3; // dream outside lines
          else categoryScores.Connector += 3; // connect dots
          break;
        case 8: // Creative blocks
          if (optionIndex === 0) categoryScores.Organizer += 2; // break/reset
          else if (optionIndex === 1) categoryScores.Creator += 3; // throw at wall
          else categoryScores.Connector += 2; // talk to someone
          break;
        case 9: // Compliments received
          if (optionIndex === 0) categoryScores.Organizer += 3; // focus/reliability
          else if (optionIndex === 1) categoryScores.Creator += 3; // creativity/originality
          else categoryScores.Connector += 3; // energy/encouragement
          break;
        case 10: // Building from scratch
          if (optionIndex === 0) categoryScores.Organizer += 3; // perfecting systems
          else if (optionIndex === 1) categoryScores.Creator += 2; // imagining evolution
          else categoryScores.Connector += 3; // bringing people together
          break;
        case 11: // Risk relationship
          if (optionIndex === 0) categoryScores.Organizer += 3; // calculate carefully
          else if (optionIndex === 1) categoryScores.Creator += 3; // follow instinct
          else categoryScores.Connector += 2; // trust people around
          break;
        case 12: // Enjoy doing
          if (optionIndex === 0) categoryScores.Organizer += 3; // finishing what others started
          else if (optionIndex === 1) categoryScores.Creator += 3; // starting something new
          else categoryScores.Organizer += 2; // improving what's there
          break;
        case 13: // Feedback preference
          if (optionIndex === 0) categoryScores.Organizer += 2; // direct/honest
          else if (optionIndex === 1) categoryScores.Connector += 2; // encouraging/positive
          else categoryScores.Creator += 2; // thoughtful/nuanced
          break;
        case 14: // World impact
          if (optionIndex === 0) categoryScores.Organizer += 3; // helping run smoothly
          else if (optionIndex === 1) categoryScores.Creator += 3; // inspiring new thinking
          else categoryScores.Connector += 3; // bringing people closer
          break;
        case 15: // End of day feeling
          if (optionIndex === 0) categoryScores.Organizer += 3; // proud of what got done
          else if (optionIndex === 1) categoryScores.Creator += 2; // excited about next
          else categoryScores.Connector += 3; // grateful for who shared with
          break;
        default:
          break;
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
          insight: "Organization is your superpower — the future loves planners like you.",
          freeResources: [
            { title: "PMP Certification Guide (Free)", description: "Complete study guide for Project Management Professional certification" },
            { title: "Agile Project Management Course", description: "Free Coursera course on agile methodologies and scrum" },
            { title: "Microsoft Project Tutorial Series", description: "YouTube series covering project management tools and techniques" },
            { title: "Harvard Business Review PM Articles", description: "Free access to project management best practices and case studies" }
          ],
          premiumResources: [
            { title: "1-on-1 PM Mentorship Program", description: "Monthly sessions with senior project managers from Fortune 500 companies" },
            { title: "PM Template Library", description: "200+ proven project templates, checklists, and frameworks" },
            { title: "Industry Conference Access", description: "Exclusive invites to PMI Global Conference and local chapter events" }
          ]
        },
        {
          title: "Operations Analyst",
          description: "Optimize business processes and improve operational efficiency",
          skills: ["Data Analysis", "Process Improvement", "Strategic Thinking", "Excel/SQL", "Project Management"],
          insight: "You're wired for puzzle-solving. Obstacles are your invitation.",
          freeResources: [
            { title: "SQL for Data Analysis Course", description: "Free CodeAcademy course covering database querying and analysis" },
            { title: "Lean Six Sigma Yellow Belt", description: "Free introduction to process improvement methodologies" },
            { title: "Excel Data Analysis Toolkit", description: "Advanced Excel functions and pivot table tutorials" },
            { title: "Business Process Mapping Guide", description: "Free templates and guides for documenting workflows" }
          ],
          premiumResources: [
            { title: "Operations Excellence Bootcamp", description: "6-week intensive program with real company case studies" },
            { title: "Advanced Analytics Suite", description: "Access to Tableau, Power BI, and statistical analysis tools" },
            { title: "Industry Analyst Network", description: "Connect with operations leaders across different industries" }
          ]
        },
        {
          title: "UX Designer",
          description: "Design user-friendly interfaces and improve user experiences",
          skills: ["Design Thinking", "User Research", "Prototyping", "Figma/Sketch", "Information Architecture"],
          insight: "That's big innovative thinking — not all imagination leaps.",
          freeResources: [
            { title: "Google UX Design Certificate", description: "Free professional certificate program through Coursera" },
            { title: "Figma Design System Tutorial", description: "Complete guide to building scalable design systems" },
            { title: "UX Research Methods Handbook", description: "Free comprehensive guide to user research techniques" },
            { title: "Design Thinking Workshop Kit", description: "Templates and exercises for running design thinking sessions" }
          ],
          premiumResources: [
            { title: "Portfolio Review with Senior UXers", description: "1-on-1 feedback sessions with design leaders from top tech companies" },
            { title: "Advanced Prototyping Tools", description: "Premium access to Principle, Framer, and other prototyping software" },
            { title: "UX Conference Season Pass", description: "Access to IXDA, UX Week, and other major design conferences" }
          ]
        }
      ],
      Creator: [
        {
          title: "Creative Director",
          description: "Lead creative teams and develop innovative brand strategies",
          skills: ["Creative Vision", "Brand Strategy", "Team Leadership", "Adobe Creative Suite", "Marketing"],
          insight: "You build things that matter. That's rare and powerful.",
          freeResources: [
            { title: "Brand Strategy Masterclass", description: "Free course on developing compelling brand narratives and positioning" },
            { title: "Adobe Creative Suite Tutorials", description: "Comprehensive video series covering Photoshop, Illustrator, and InDesign" },
            { title: "Creative Leadership Podcast", description: "Weekly interviews with creative directors from top agencies" },
            { title: "Design Inspiration Gallery", description: "Curated collection of award-winning creative campaigns" }
          ],
          premiumResources: [
            { title: "Creative Director Mentorship", description: "Quarterly strategy sessions with award-winning creative leaders" },
            { title: "Agency Pitch Deck Library", description: "200+ winning pitch presentations from top creative agencies" },
            { title: "Cannes Lions Workshop Access", description: "Behind-the-scenes content and workshops from award-winning campaigns" }
          ]
        },
        {
          title: "Product Designer",
          description: "Design and develop new products that solve real problems",
          skills: ["Product Development", "Design Thinking", "Innovation", "User Testing", "Wireframing"],
          insight: "Purpose drives you — and purpose doesn't feel it.",
          freeResources: [
            { title: "Product Design Sprint Guide", description: "Free 5-day design sprint methodology from Google Ventures" },
            { title: "User Testing Platform Access", description: "Free tier access to user testing and feedback tools" },
            { title: "Product Design Case Studies", description: "In-depth breakdowns of successful product launches" },
            { title: "Wireframing Templates", description: "Free Sketch and Figma templates for common interface patterns" }
          ],
          premiumResources: [
            { title: "Product Design Bootcamp", description: "8-week intensive program with real startup product challenges" },
            { title: "Design System Audit Tool", description: "AI-powered analysis of your design systems and components" },
            { title: "Product Leader Network", description: "Access to product design leaders from unicorn startups" }
          ]
        },
        {
          title: "Content Creator",
          description: "Create engaging content across various digital platforms",
          skills: ["Storytelling", "Visual Design", "Social Media", "Video Editing", "SEO/Analytics"],
          insight: "You thrive in your inner world — that's where breakthroughs begin.",
          freeResources: [
            { title: "Content Strategy Playbook", description: "Free guide to building content calendars and engagement strategies" },
            { title: "Video Editing Crash Course", description: "DaVinci Resolve tutorials for professional video production" },
            { title: "SEO Content Optimization", description: "Free tools and guides for content that ranks on search engines" },
            { title: "Creator Economy Newsletter", description: "Weekly insights on monetization and platform trends" }
          ],
          premiumResources: [
            { title: "Creator Accelerator Program", description: "3-month program with successful YouTubers and TikTok creators" },
            { title: "Premium Content Tools Suite", description: "Access to Canva Pro, Adobe Suite, and scheduling platforms" },
            { title: "Brand Partnership Network", description: "Connect with brands looking for content creator partnerships" }
          ]
        }
      ],
      Connector: [
        {
          title: "Team Coach",
          description: "Help teams improve performance and achieve their goals",
          skills: ["Coaching", "Team Building", "Communication", "Emotional Intelligence", "Performance Management"],
          insight: "Your energy lifts the room. That's leadership in motion.",
          freeResources: [
            { title: "Team Coaching Certification", description: "Free ICF-accredited coaching fundamentals course" },
            { title: "Emotional Intelligence Assessment", description: "Free EQ assessment tools and development resources" },
            { title: "Team Building Activity Library", description: "100+ proven exercises for virtual and in-person teams" },
            { title: "Performance Management Templates", description: "Free frameworks for goal setting and feedback conversations" }
          ],
          premiumResources: [
            { title: "Executive Coaching Certification", description: "Advanced coaching certification with practice clients" },
            { title: "Team Psychology Masterclass", description: "Deep dive into team dynamics with organizational psychologists" },
            { title: "Corporate Training Network", description: "Access to Fortune 500 companies for coaching opportunities" }
          ]
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
        // Calculate more accurate percentages based on actual scores
        let matchPercentage;
        if (index === 0) {
          // Top category gets highest percentages
          matchPercentage = Math.max(baseMatchPercentage - (careerIndex * 5), 85);
        } else if (index === 1) {
          // Second category gets medium percentages  
          matchPercentage = Math.max(baseMatchPercentage - (careerIndex * 7) - 10, 65);
        } else {
          // Third category gets lower percentages
          matchPercentage = Math.max(baseMatchPercentage - (careerIndex * 8) - 20, 45);
        }
        
        topRecommendations.push({
          ...career,
          category,
          match: Math.min(matchPercentage, 96) // Cap at 96%
        });
      });
    });

    return topRecommendations.slice(0, 6);
  };

  const handleCareerClick = (career: CareerRecommendation) => {
    navigate(`/career/${encodeURIComponent(career.title)}`, { state: { career } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="animate-float mb-6">
            <div className="bg-gradient-spark p-4 rounded-full shadow-glow animate-pulse-glow mx-auto w-fit">
              <Trophy className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-spark bg-clip-text text-transparent mb-4">
            Your Career Spark Results
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl text-muted-foreground mb-4">
              🎉 Congratulations! Your unique strengths have been analyzed.
            </p>
            <p className="text-lg text-muted-foreground">
              Based on your answers, here are the careers that best match your work style and interests.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {recommendations.map((career, index) => (
            <Card 
              key={career.title} 
              className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border-2 hover:border-primary/50 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleCareerClick(career)}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-spark opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-spark text-white shadow-spark"
                  >
                    {career.match}% Match
                  </Badge>
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-5 w-5 text-primary group-hover:animate-pulse" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {career.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {career.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary/80">
                    {career.category} Path
                  </Badge>
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-all group-hover:scale-110">
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-secondary p-10 rounded-3xl shadow-glow max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/15 rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                🚀 Ready to Launch Your Dream Career?
              </h2>
              <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
                Each career path comes with verified resources, detailed roadmaps, and expert insights. 
                Your spark is unique — let's turn it into your success story.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 px-8 py-4 rounded-full backdrop-blur-sm">
                  <span className="text-white font-semibold">✨ Free Resources Available ✨</span>
                </div>
                <div className="bg-white/20 px-8 py-4 rounded-full backdrop-blur-sm">
                  <span className="text-white font-semibold">🎯 Personalized Roadmaps 🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;