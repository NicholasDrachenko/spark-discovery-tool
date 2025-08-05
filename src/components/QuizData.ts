export interface QuizOption {
  text: string;
  feedback: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you usually start a big project?",
    options: [
      {
        text: "I break it down into a checklist and make a timeline.",
        feedback: "Organization is your superpower — the future loves planners like you."
      },
      {
        text: "I sketch ideas and explore possibilities before deciding.",
        feedback: "That's how innovators think — your imagination leads."
      },
      {
        text: "I talk to others and gather input first.",
        feedback: "You value perspectives. Collaboration makes your ideas stronger."
      }
    ]
  },
  {
    id: 2,
    question: "What's most exciting to you in a job?",
    options: [
      {
        text: "Solving challenging problems.",
        feedback: "You're wired for puzzle-solving. Obstacles are your invitation."
      },
      {
        text: "Creating something meaningful or beautiful.",
        feedback: "You build things that matter. That's rare and powerful."
      },
      {
        text: "Being part of something bigger than myself.",
        feedback: "Purpose drives you — and people feel it."
      }
    ]
  },
  {
    id: 3,
    question: "Which statement feels most true to you?",
    options: [
      {
        text: "I get energized when I'm alone with my thoughts.",
        feedback: "You thrive in your inner world — that's where breakthroughs begin."
      },
      {
        text: "I come alive when I'm around others.",
        feedback: "Your energy lifts the room. That's leadership in motion."
      },
      {
        text: "I flow between solitude and connection.",
        feedback: "Adaptability is your edge — you navigate both worlds."
      }
    ]
  },
  {
    id: 4,
    question: "When someone gives you a vague idea, you…",
    options: [
      {
        text: "Map it out and give it structure.",
        feedback: "You bring clarity to chaos. Every team needs you."
      },
      {
        text: "Spin it into something unexpected.",
        feedback: "That's creative alchemy — you make ideas dance."
      },
      {
        text: "Ask questions and build on it with others.",
        feedback: "Your curiosity multiplies ideas. That's real momentum."
      }
    ]
  },
  {
    id: 5,
    question: "Which environment would make you most productive?",
    options: [
      {
        text: "Quiet, calm, and uninterrupted.",
        feedback: "You do deep work — brilliance needs breathing room."
      },
      {
        text: "Energetic, spontaneous, and full of ideas.",
        feedback: "You thrive in movement — and spark new directions."
      },
      {
        text: "Supportive, consistent, and mission-driven.",
        feedback: "You shine in purpose-driven spaces."
      }
    ]
  },
  {
    id: 6,
    question: "You've been given a task no one has done before. What's your first move?",
    options: [
      {
        text: "Research and gather information.",
        feedback: "You're a learner first — that's a lifelong strength."
      },
      {
        text: "Experiment and see what happens.",
        feedback: "You grow through action — even Picasso painted messy drafts."
      },
      {
        text: "Ask others how they'd do it.",
        feedback: "You understand that great work doesn't happen in a vacuum."
      }
    ]
  },
  {
    id: 7,
    question: "Which phrase sounds most like you?",
    options: [
      {
        text: "I organize the chaos.",
        feedback: "You're the calm in the storm — people count on you."
      },
      {
        text: "I dream outside the lines.",
        feedback: "The world needs your vision. Don't shrink it."
      },
      {
        text: "I connect the dots between people and ideas.",
        feedback: "You're a bridge — and that's a rare gift."
      }
    ]
  },
  {
    id: 8,
    question: "How do you handle creative blocks?",
    options: [
      {
        text: "Take a break and reset with structure.",
        feedback: "You know when to pause — that's wisdom, not weakness."
      },
      {
        text: "Keep throwing things at the wall until something sticks.",
        feedback: "Persistence fuels brilliance. Keep moving."
      },
      {
        text: "Talk to someone and bounce ideas around.",
        feedback: "You're not stuck — you're gathering sparks."
      }
    ]
  },
  {
    id: 9,
    question: "What do people usually compliment you on?",
    options: [
      {
        text: "My focus and reliability.",
        feedback: "Consistency is underrated — but never unrecognized."
      },
      {
        text: "My creativity and originality.",
        feedback: "People remember your spark. That's no small thing."
      },
      {
        text: "My energy and encouragement.",
        feedback: "Your presence gives others permission to shine."
      }
    ]
  },
  {
    id: 10,
    question: "You're building something from scratch. What excites you most?",
    options: [
      {
        text: "Perfecting the systems and processes.",
        feedback: "Great builders start with the foundation — that's you."
      },
      {
        text: "Imagining how it could evolve over time.",
        feedback: "You're a visionary, always ahead of the curve."
      },
      {
        text: "Bringing people together around the idea.",
        feedback: "You turn ideas into movements. That's a gift."
      }
    ]
  },
  {
    id: 11,
    question: "What's your relationship with risk?",
    options: [
      {
        text: "I calculate carefully and then decide.",
        feedback: "Your thoughtfulness leads to strong outcomes."
      },
      {
        text: "I follow instinct — even if it's unconventional.",
        feedback: "Bold moves shape big futures. You've got that instinct."
      },
      {
        text: "I take risks when I trust the people around me.",
        feedback: "Trust and timing guide your courage. Powerful combo."
      }
    ]
  },
  {
    id: 12,
    question: "Which of these do you most enjoy doing?",
    options: [
      {
        text: "Finishing what others started.",
        feedback: "You bring things across the finish line — that's impact."
      },
      {
        text: "Starting something totally new.",
        feedback: "You see what doesn't yet exist — and make it real."
      },
      {
        text: "Improving what's already there.",
        feedback: "You refine ideas into something even better."
      }
    ]
  },
  {
    id: 13,
    question: "What kind of feedback do you value most?",
    options: [
      {
        text: "Direct and honest.",
        feedback: "You grow fast because you don't flinch from truth."
      },
      {
        text: "Encouraging and positive.",
        feedback: "You blossom in spaces where you feel seen."
      },
      {
        text: "Thoughtful and nuanced.",
        feedback: "Depth matters to you — surface-level won't cut it."
      }
    ]
  },
  {
    id: 14,
    question: "If your work made one impact on the world, it would be…",
    options: [
      {
        text: "Helping things run more smoothly.",
        feedback: "Quiet efficiency shapes every great system."
      },
      {
        text: "Inspiring new ways of thinking.",
        feedback: "Ideas ripple — and yours could shift minds."
      },
      {
        text: "Bringing people closer together.",
        feedback: "Connection is the heartbeat of everything."
      }
    ]
  },
  {
    id: 15,
    question: "At the end of the day, what do you want to feel?",
    options: [
      {
        text: "Proud of what I got done.",
        feedback: "Achievement energizes you. That's beautiful."
      },
      {
        text: "Excited about what's next.",
        feedback: "Your forward-motion is magnetic."
      },
      {
        text: "Grateful for who I shared it with.",
        feedback: "You know work is personal — and people matter."
      }
    ]
  }
];