export const site = {
  "domain": "DeveloperOffshore.com",
  "slug": "developeroffshore",
  "brand": "Developer Offshore",
  "primary": "developer offshore staffing",
  "audience": "software teams that want offshore developers without hiring chaos",
  "angle": "developer pods, sprint support, QA, code review, and timezone overlap",
  "style": "Dark developer console",
  "dark": "#020617",
  "color": "#38bdf8",
  "accent": "#a78bfa",
  "heroImage": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "alt": "software developers collaborating on laptops in modern office",
  "badge": "Dev pods"
} as const;

export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations Support for teams using developer offshore staffing with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer Support for teams using developer offshore staffing with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin Support for teams using developer offshore staffing with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA for teams using developer offshore staffing with clear SOPs, weekly review, and measurable handoffs."
  }
] as const;

export type BlogSource = { name: string; url: string; note?: string };
export type BlogSection = { heading: string; body: string[]; bullets?: string[] };
export type BlogModule = { title: string; rows: { label: string; value: string }[] };
export type BlogFaq = { question: string; answer: string };
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  keyTakeaways?: string[];
  sections?: BlogSection[];
  modules?: BlogModule[];
  script?: { title: string; lines: string[] };
  faqs?: BlogFaq[];
  sources?: BlogSource[];
};

export const blogPosts: BlogPost[] = [
  {
    "slug": "developer-offshore-staffing-planning",
    "title": "Developer Offshore: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "developer-offshore-staffing-tasks-to-outsource",
    "title": "Developer Offshore: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "developer-offshore-staffing-provider-questions",
    "title": "Developer Offshore: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with an offshore developer provider or freelancer.",
    "minutes": 8,
    "keyTakeaways": [
      "Ask how code is reviewed before you ask about hourly rate.",
      "Keep production access limited until the first 14-day pilot is clean.",
      "Use one scorecard for code quality, response time, security habits, and manager ownership.",
      "A good provider can explain replacement, escalation, and tool access rules in plain English."
    ],
    "sections": [
      {
        "heading": "Start with the work, not the resume",
        "body": [
          "A senior resume can still fail if the work is vague. Before a sales call, write down the first 5 to 10 tickets you want handled. Include one bug, one small feature, one test fix, and one pull request cleanup. That gives the provider something real to staff against.",
          "Ask who turns that list into a role. If the answer is only \"send us the job description,\" the risk stays with you. A useful provider should help narrow the role, set review points, and flag work that should stay with your in-house tech lead."
        ],
        "bullets": [
          "Which tickets should this person own in week one?",
          "Which tickets are off limits until trust is earned?",
          "Who signs off on architecture, security, and production changes?"
        ]
      },
      {
        "heading": "Ask how code review works",
        "body": [
          "Do not accept \"our developers are vetted\" as the whole answer. Ask what happens after the developer writes code. GitHub's protected branch docs are a useful baseline because they show common controls like required reviews and required status checks before a merge.",
          "For a small pilot, ask for two review layers: your tech lead owns final approval, and the offshore manager checks ticket notes, test evidence, and handoff quality before the pull request reaches your queue."
        ],
        "bullets": [
          "Will every change go through a pull request?",
          "What tests or screenshots must be attached before review?",
          "Who checks for copied code, missed edge cases, and unclear comments?"
        ]
      },
      {
        "heading": "Treat access like a hiring test",
        "body": [
          "Access control is where many offshore plans get sloppy. NIST's least privilege control says users should only get the access needed for assigned duties. For a developer pilot, that usually means repo access by project, ticket access by board, and no direct production secrets at the start.",
          "Personal access tokens need the same care. GitHub's token guidance pushes short-lived and fine-scoped access where possible. Ask the provider how tokens are created, stored, rotated, and removed when a developer rolls off."
        ],
        "bullets": [
          "Can we start with staging only?",
          "Who removes access on the same day if the pilot ends?",
          "Where are passwords, tokens, and recovery codes stored?"
        ]
      },
      {
        "heading": "Make the first 14 days measurable",
        "body": [
          "Two weeks is long enough to see patterns without locking yourself into a bad fit. Give the developer a narrow queue, then review cycle time, rework, communication, and security habits twice a week.",
          "The scorecard should be boring. That is the point. A simple 1 to 5 rating for pull request quality, test evidence, update clarity, and manager follow-up will tell you more than a polished sales deck."
        ],
        "bullets": [
          "Day 1: access, repo tour, sample ticket, and review rules.",
          "Day 3: first pull request and manager check-in.",
          "Day 7: scorecard review and scope adjustment.",
          "Day 14: keep, replace, or redesign the role."
        ]
      }
    ],
    "modules": [
      {
        "title": "Provider question scorecard",
        "rows": [
          { "label": "Code review", "value": "Ask who reviews pull requests before your tech lead sees them." },
          { "label": "Security", "value": "Ask for least-privilege access, token removal rules, and production limits." },
          { "label": "Management", "value": "Ask who handles missed updates, poor fit, and replacement." },
          { "label": "Pilot", "value": "Ask for a 14-day plan with ticket goals and two review points." }
        ]
      }
    ],
    "script": {
      "title": "Call script you can copy",
      "lines": [
        "\"We want to start with a narrow developer pilot, not a broad hire. Can you help us turn 5 to 10 tickets into the right role?\"",
        "\"What access do you recommend for week one, and what should stay with our internal lead?\"",
        "\"If the first developer is not a fit, who decides that and how fast can we reset?\""
      ]
    },
    "faqs": [
      {
        "question": "Should I hire one offshore developer or a small pod first?",
        "answer": "Start with one developer if your team already has a tech lead and a clean backlog. Consider a small pod only when you also need QA, project notes, or daily management covered."
      },
      {
        "question": "Should an offshore developer get production access?",
        "answer": "Not on day one. Start with staging, limited repo access, and clear approval rules. Add broader access only after the developer has shown safe work habits."
      },
      {
        "question": "What is a fair pilot length?",
        "answer": "A 14-day pilot is a practical starting point. It gives enough time for setup, at least one pull request, a scorecard review, and a keep-or-replace decision."
      }
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5, AC-6 least privilege",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Used for the access-control baseline."
      },
      {
        "name": "GitHub protected branch documentation",
        "url": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
        "note": "Used for pull request and status-check controls."
      },
      {
        "name": "GitHub personal access token guidance",
        "url": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens",
        "note": "Used for token-scope and removal questions."
      },
      {
        "name": "OWASP Code Review Guide",
        "url": "https://owasp.org/www-project-code-review-guide/",
        "note": "Used for secure review framing."
      }
    ]
  },
  {
    "slug": "developer-offshore-staffing-onboarding-checklist",
    "title": "Developer Offshore: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
];

export const stats = [
  {label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},
  {label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},
  {label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}
] as const;

export const stealthOffer = {
  partner: 'Stealth Agents',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'Stealth Agents can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and Stealth Agents can guide the best fit.';
