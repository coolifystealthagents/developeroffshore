export const site = {
  "domain": "DeveloperOffshore.com",
  "slug": "developeroffshore",
  "brand": "Developer Offshore",
  "primary": "developer offshore staffing",
  "audience": "software teams that need offshore developers without running the whole search alone",
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
    "title": "Development Operations Support",
    "desc": "Keep sprint boards, release notes, technical handoffs, and routine delivery checks up to date."
  },
  {
    "slug": "customer-support",
    "title": "Product Support Engineering",
    "desc": "Handle reproducible bug reports, support escalations, log checks, and fixes that need an engineer."
  },
  {
    "slug": "admin-support",
    "title": "Engineering Admin Support",
    "desc": "Take care of ticket cleanup, release documentation, access requests, and other recurring engineering chores."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Run regression checks, verify bugs, record test evidence, and give the team a clear weekly quality report."
  }
] as const;

export type BlogSource = { name: string; url: string; note?: string };
export type BlogSection = { heading: string; body: string[]; bullets?: string[] };
export type BlogModule = { title: string; rows: { label: string; value: string }[] };
export type BlogFaq = { question: string; answer: string };
export type BlogTable = {
  title: string;
  columns: string[];
  rows: string[][];
};
export type BlogChart = {
  title: string;
  categories: { label: string; color: string }[];
  rows: { label: string; values: number[] }[];
  method: string;
};
export type BlogGraphic = { title: string; steps: { title: string; note: string }[] };
export type BlogQuote = { text: string; by: string; role: string; sourceUrl: string };
export type BlogLink = { label: string; href: string; note: string };
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  datePublished?: string;
  dateModified?: string;
  revision?: string;
  keyTakeaways?: string[];
  sections?: BlogSection[];
  modules?: BlogModule[];
  script?: { title: string; lines: string[] };
  table?: BlogTable;
  chart?: BlogChart;
  graphic?: BlogGraphic;
  quote?: BlogQuote;
  relatedLinks?: BlogLink[];
  faqs?: BlogFaq[];
  sources?: BlogSource[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'onboard-offshore-developers-philippines-first-30-days',
    title: 'How to onboard offshore developers in the Philippines: a secure first-30-days plan',
    excerpt: 'Onboard offshore developers in the Philippines with a small first ticket, named review owners, and access that grows only after good work. This 30-day plan gives your lead clear checks for code, security, updates, and handoff quality.',
    minutes: 15,
    datePublished: '2026-07-27',
    dateModified: '2026-07-27',
    revision: '2026-07-27-philippines-developer-onboarding-v1',
    keyTakeaways: [
      'Give each Philippine developer one named lead, one small first ticket, and one written definition of done.',
      'Start with a sandbox, staging, and the fewest repo permissions needed for the assigned work.',
      'Require pull requests, focused tests, and a short handoff before any change can move toward release.',
      'Write an AI tool rule before day one and ask developers to mark assisted work and explain how they checked it.',
      'Use day 7, day 14, and day 30 reviews to decide whether the role is ready for more scope or needs a reset.',
    ],
    sections: [
      {
        heading: 'Prepare the role before the first login',
        body: [
          'A good start happens before the new developer opens a repository. Write a one-page role brief that names the product area, stack, first outcome, working hours in Philippine time and your team time, and the person who can answer technical questions.',
          'Add a short boundary list beside the role brief. State which repos are open, which environments are closed, who approves a merge, who may change database rules, and where the developer should raise a security concern.',
        ],
        bullets: [
          'Name the technical owner and a backup owner for Philippine working hours.',
          'Pick one small ticket that can be finished without customer records or production secrets.',
          'Write the acceptance checks, test command, branch rule, and handoff format.',
          'Book the day 3, day 7, day 14, and day 30 review points before work starts.',
        ],
      },
      {
        heading: 'Make day one small and specific',
        body: [
          'Do not fill the first day with a long company tour and then leave the developer alone with a large backlog. Give a short product map, show one completed ticket, run the project together, and ask the developer to make a harmless documentation or test change.',
          'Use the first change to prove the basic path from ticket to branch, local check, pull request, review, and handoff. If any step is confusing, fix the written guide while both people can still see the gap.',
        ],
      },
      {
        heading: 'Open access in measured steps',
        body: [
          'NIST control AC-6 says people and processes should receive only the access needed for assigned work. For a Philippines-based developer, begin with named accounts, one project repo, the needed ticket board, a safe test environment, and no customer export or production secret.',
          'Create an access record that lists the account, owner, reason, approval date, and removal trigger. Review that record on day 7 and day 30, then remove anything the role did not use instead of leaving old permissions in place.',
        ],
        bullets: [
          'Use a company-managed identity rather than a shared login.',
          'Keep production deploys, secret stores, billing controls, and security exceptions with your internal owner.',
          'Set an end date for temporary access and record who can extend it.',
          'Test the same-day removal path before the developer handles important work.',
        ],
      },
      {
        heading: 'Set the pull request rule before real work',
        body: [
          'GitHub protected branches can require an approving review and passing status checks before a merge. Turn those controls on before the first real ticket, because a spoken rule is easy to forget when a release is busy.',
          'Keep the first pull requests narrow enough for a lead to read in one sitting. Ask for the linked ticket, a plain summary, tests run, screenshots or API examples when useful, known limits, and the exact point where the developer needs a decision.',
        ],
      },
      {
        heading: 'Treat AI-assisted code as code that still needs proof',
        body: [
          'The 2024 Stack Overflow Developer Survey found that 76% of respondents used or planned to use AI tools in development, while 62% were already using them compared with 44% the year before. The same survey found that 45% of professional developers thought AI tools were bad or very bad at complex tasks.',
          'GitHub reported 137,000 public generative AI projects in 2024, up 98% from the prior year, with contributions to those projects up 59%. These numbers are global rather than Philippines-specific, but they show why a remote developer onboarding plan needs a written AI rule instead of pretending the tools are absent.',
          'Allow or restrict tools by repository and data type, then apply the same rule to every person in the role. Ask the developer to mark assisted code, check licenses and sources when needed, run tests, review security-sensitive paths, and explain any suggestion that was rejected.',
        ],
      },
      {
        heading: 'Put an access-control case in the first sprint',
        body: [
          'OWASP placed Broken Access Control first in its 2021 Top 10 after its contributed dataset recorded 318,487 occurrences mapped to 19,013 CVEs. A new developer should see how your product checks ownership and permissions before touching a feature that reads or changes user data.',
          'Use a safe case in staging or a local fixture, such as changing an object identifier and confirming that one test user cannot reach another user\'s record. Ask the developer to show the server rule, the test, the log entry, and the person who may approve an exception.',
        ],
      },
      {
        heading: 'Check work at day 7 and day 14',
        body: [
          'The day 7 review should use evidence from a real but bounded ticket. Look at setup friction, pull request size, test focus, review response, update clarity, and whether the developer asked for help before a blocked task went quiet.',
          'By day 14, the developer should complete a small change with less pairing while still following the same gates. If the work is weak, narrow the role, repair the guide, or replace the first task rather than adding more repos and hoping the problem disappears.',
        ],
      },
      {
        heading: 'Use day 30 to set the next boundary',
        body: [
          'At day 30, compare the role brief with completed work instead of relying on a general feeling. Review accepted tickets, returned changes, escaped defects, written updates, access use, handoffs, and the amount of lead time needed to get work over the line.',
          'Choose one of three plain outcomes: keep the same boundary, add one named responsibility, or reset the role and support plan. Record why the decision was made, who owns the next review, and which production or architecture decisions remain with your internal lead.',
        ],
      },
    ],
    table: {
      title: 'First-30-days onboarding checks for a Philippine offshore developer',
      columns: ['Review point', 'Developer evidence', 'Lead check', 'Access boundary'],
      rows: [
        ['Day 1', 'Project runs locally and one safe change reaches review.', 'Confirm setup steps, branch rule, and help channel.', 'Named account, one repo, ticket board, and safe environment.'],
        ['Day 3', 'First bounded ticket has tests and a written handoff.', 'Review assumptions, pull request size, and open questions.', 'Keep customer records and production secrets closed.'],
        ['Day 7', 'A completed ticket follows the team definition of done.', 'Score quality, updates, review response, and blockers.', 'Remove unused access and extend only what the next ticket needs.'],
        ['Day 14', 'A second change moves with less pairing and the same gates.', 'Check rework, security thinking, and handoff clarity.', 'Consider one extra repo only when the role now needs it.'],
        ['Day 30', 'Work record shows accepted changes and known limits.', 'Choose keep, expand one duty, or reset the role.', 'Document the next boundary and test the removal path.'],
      ],
    },
    chart: {
      title: 'Suggested review mix across the first 30 days',
      categories: [
        { label: 'Paired setup', color: '#0f8f73' },
        { label: 'Developer work', color: '#2563eb' },
        { label: 'Lead review', color: '#7c3aed' },
        { label: 'Written handoff', color: '#f27b3d' },
      ],
      rows: [
        { label: 'Day 1', values: [45, 20, 25, 10] },
        { label: 'Day 3', values: [30, 35, 25, 10] },
        { label: 'Day 7', values: [20, 45, 25, 10] },
        { label: 'Day 14', values: [10, 55, 25, 10] },
        { label: 'Day 30', values: [5, 60, 25, 10] },
      ],
      method: 'Units are percentage points of a 100-point review mix at each checkpoint. The values are an editorial planning example, not measured performance, and should be adjusted to the ticket risk and the experience of the developer and lead.',
    },
    graphic: {
      title: 'The safe path from first login to wider ownership',
      steps: [
        { title: 'Role brief', note: 'Name the outcome, stack, owner, schedule, and closed decisions.' },
        { title: 'Safe access', note: 'Use named accounts, one repo, and a test environment.' },
        { title: 'Small ticket', note: 'Start with bounded work that has written acceptance checks.' },
        { title: 'Review proof', note: 'Collect tests, pull request notes, feedback, and a handoff.' },
        { title: 'Next boundary', note: 'Use day 30 evidence to keep, add, or reset one duty.' },
      ],
    },
    quote: {
      text: 'Code review is a process in which code is reviewed by someone other than the author, often before the introduction of that code into a codebase.',
      by: 'Tom Manshreck and Caitlin Sadowski',
      role: 'authors of the Code Review chapter in Software Engineering at Google',
      sourceUrl: 'https://abseil.io/resources/swe-book/html/ch09.html',
    },
    relatedLinks: [
      { label: 'Use the Philippine developer assessment guide', href: '/blog/hire-software-developers-philippines-assessment-guide', note: 'Match the work sample to the real developer role before onboarding starts. Keep the same score areas for every candidate in the opening.' },
      { label: 'Plan QA automation engineering', href: '/services/qa-automation-engineering', note: 'See which regression checks and test evidence a Philippines-based QA engineer can own. Keep release decisions and accepted risk with your own lead.' },
      { label: 'Review provider questions', href: '/blog/developer-offshore-staffing-provider-questions', note: 'Check who manages attendance, fit, code review, access removal, and replacement. Save the answers beside the onboarding plan.' },
      { label: 'Map a Node.js API role', href: '/services/node-js-api-development', note: 'Use a clear lane for endpoint work, tests, logs, and engineering escalation. Keep data rules and sensitive production decisions with your team.' },
      { label: 'Discuss a Philippines developer plan', href: '/contact', note: 'Share the stack, first ticket, working hours, and review owner you need. The staffing team can use those details to discuss a Philippines-based candidate plan.' },
    ],
    faqs: [
      { question: 'What should a Philippine offshore developer do on the first day?', answer: 'Run the project, read one finished ticket, and send a safe documentation or test change through review. The goal is to prove the work path and fix setup gaps before a real feature begins.' },
      { question: 'When should a new offshore developer receive production access?', answer: 'Do not use time alone as the test. Add access only when a named task needs it, earlier work shows safe habits, and your internal owner has approved the exact boundary.' },
      { question: 'How often should the technical lead review early work?', answer: 'Review the first change together, then hold evidence reviews on day 7, day 14, and day 30. Keep pull requests small enough that feedback arrives before the developer builds more work on a weak choice.' },
      { question: 'Should a Philippines-based developer use AI coding tools?', answer: 'Use one written rule based on the repository and the data involved. If tools are allowed, require marked assisted work, tests, source checks when needed, and a human explanation of the final code.' },
    ],
    sources: [
      { name: 'NIST SP 800-53 Rev. 5, AC-6 Least Privilege', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Published September 2020 and updated in 2025; used for the access baseline.' },
      { name: 'GitHub Docs: About protected branches', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches', note: 'Used for required review and status-check controls.' },
      { name: 'Stack Overflow 2024 Developer Survey: AI', url: 'https://survey.stackoverflow.co/2024/ai', note: 'Used for 2024 AI use, year comparison, and complex-task responses.' },
      { name: 'GitHub Octoverse 2024', url: 'https://github.blog/news-insights/octoverse/octoverse-2024/', note: 'Published October 29, 2024; used for public generative AI project activity.' },
      { name: 'OWASP Top 10 A01:2021 Broken Access Control', url: 'https://owasp.org/Top10/2021/A01_2021-Broken_Access_Control/index.html', note: 'Used for the 2021 contributed dataset occurrence and CVE counts.' },
      { name: 'Software Engineering at Google: Code Review', url: 'https://abseil.io/resources/swe-book/html/ch09.html', note: 'Source of the exact expert quote about code review.' },
    ],
  },
  {
    slug: 'hire-software-developers-philippines-assessment-guide',
    title: 'How to hire software developers in the Philippines: a role-based assessment guide',
    excerpt: 'Hire software developers in the Philippines with a work sample that matches the real role. Use the same scorecard for every candidate, then keep code approval and sensitive access with your own technical owner.',
    minutes: 14,
    datePublished: '2026-07-24',
    dateModified: '2026-07-24',
    revision: '2026-07-24-role-assessment-guide',
    keyTakeaways: [
      'Name one role before you review candidates, because a broad full-stack label hides very different work.',
      'Use a small sandbox task with fake data instead of asking a candidate to solve a live business problem.',
      'Score the work before the interview so a smooth conversation does not replace technical evidence.',
      'Test how candidates check AI-assisted code, explain tradeoffs, and report what they could not prove.',
      'Keep final merge approval, production access, and security exceptions with a named technical owner.',
    ],
    sections: [
      {
        heading: 'Start with the role you need',
        body: [
          'To hire software developers in the Philippines well, start with the work that must move each week. Name the product area, stack, users, and decisions the new developer may make without waiting for approval.',

          'Write one short role brief before looking at profiles. It should state the first production outcome, the systems touched, the review owner, the expected written handoff, and the access that stays closed during the assessment.',
        ],
        bullets: [
          'Frontend: user states, accessibility, browser behavior, and maintainable components.',
          'Backend or API: data rules, authorization, failure handling, logs, and tests.',
          'Mobile: device lifecycle, offline behavior, secure storage, and release diagnosis.',
          'QA automation: stable tests, useful defect evidence, and failure triage.',
          'Platform: infrastructure code, least privilege, monitoring, and rollback thinking.',
        ],
      },
      {
        heading: 'Build the scorecard before the interview',
        body: [
          'Use the same four score areas for every person applying to the same opening: practical work, system reasoning, quality and security, and communication. Change the weight of each area by role, but approve the weights before anyone sees a candidate name or profile.',
          'Give each score a plain anchor instead of a vague label. A score of one might mean the expected path works but named failure cases are missing, while a score of four might mean the candidate handles the required cases, adds focused tests, and clearly explains one risk that still needs an owner decision.',

        ],
      },
      {
        heading: 'Match the work sample to the developer role',
        body: [
          'A good sample is small enough to finish without touching a real customer system. Give the candidate a sandbox repository, synthetic data, clear acceptance checks, and a short place to write assumptions and unfinished work.',
          'Frontend candidates can build one API-fed screen with loading, empty, success, and error states. Review keyboard use, semantic markup, state choices, test focus, and whether the person explains what would change before this screen served real users.',
          'Backend candidates can add a retry-safe endpoint with authentication and an audit trail. Review the API contract, input checks, object-level authorization, transaction choices, failure responses, logs, and tests that prove one user cannot read or change another user\'s record.',
          'Mobile candidates can diagnose a broken offline sync flow or add one bounded feature around device permissions. Review lifecycle handling, local storage choices, conflict behavior, useful logs, and the steps the candidate would use to test on more than one device state.',
          'QA automation candidates can automate a short user path and investigate one planted flaky test. Review selector stability, test isolation, failure evidence, API versus browser coverage, and whether the defect report gives a developer enough detail to reproduce the problem.',
          'Platform candidates can review a sandbox deployment plan and propose a safe change with rollback steps. Review access scope, secret handling, infrastructure code, monitoring, failure signals, and what the candidate refuses to change without a second approver.',
        ],
      },
      {
        heading: 'Test how candidates use AI coding tools',
        body: [
          'AI tools are already part of normal development work, so a blanket ban can hide the skill you need to see. Stack Overflow\'s 2024 survey found that 76% of respondents used or planned to use AI tools in their development process.',
          'Trust was mixed in the same survey: 43% felt good about AI accuracy, while 31% were skeptical. GitHub also reported more than 70,000 new public and open-source generative AI projects in 2024, with project count up 98% from the prior year.',
          'Tell candidates whether AI tools are allowed, then ask them to mark assisted work and show how they checked it. A strong answer includes tests, source checks, a security review, and a clear note about any output the candidate rejected or rewrote.',

        ],
      },
      {
        heading: 'Put security inside the sample',
        body: [
          'Security questions work better when they sit inside a real task. OWASP\'s 2021 Broken Access Control dataset recorded 318,487 occurrences and mapped the category to 19,013 CVEs, so authorization deserves direct evidence in backend, full-stack, mobile, and platform reviews.',
          'Ask the candidate to find or prevent one access mistake, such as changing an object ID to reach another account. The answer should cover the server-side rule, the test that proves it, the log that would help an investigation, and the owner who approves an exception.',
          'NIST AC-6 describes least privilege as giving users and processes only the access needed for assigned work. During assessment, that means a sandbox repo, fake secrets, synthetic records, and no path into production or customer data.',

        ],
      },
      {
        heading: 'Use code review as part of the interview',
        body: [
          'Ask the candidate to open a pull request, then spend part of the interview reviewing it together. The goal is to hear why a choice was made, which edge case worried the candidate, and what feedback would change the code.',
          'A clean review is more useful than a trivia quiz because it shows how the person will work with your lead. It also gives you a writing sample, a testing discussion, and a small view of how the candidate handles a correction.',

        ],
      },
      {
        heading: 'Run one structured interview for every candidate',
        body: [
          'Use the same core questions in the same order for everyone applying to the opening. Ask about the sample first, then ask one role-specific failure question, one quality question, and one handoff question.',

          'Include a short written handoff that another developer could use the next day. Judge whether it names the change, tests, known limits, and next decision, rather than treating accent, camera style, or fast speech as a stand-in for clear work.',
          'The Philippine Statistics Authority reported a 91.6% functional literacy result among Filipinos aged 10 to 64 in 2019. That is a broad population measure, not proof of any developer\'s skill, so each candidate still needs the same role-specific writing and reasoning check.',
        ],
      },
      {
        heading: 'Choose with evidence and set the next owner',
        body: [
          'Make the decision from the approved scorecard, the work sample, and the structured interview notes. A candidate should meet the required score in the role\'s most important area instead of passing only because strong communication hides weak production evidence.',
          'Record one reason for the decision and one risk to check during onboarding. If the person joins, keep final merge approval, architecture changes, production access, and security exceptions with your named technical owner until real work supports a wider boundary.',

        ],
      },
    ],
    table: {
      title: 'Role-based assessment matrix for Philippine software developer candidates',
      columns: ['Role', 'Bounded sample', 'Evidence to review', 'Owner control'],
      rows: [
        ['Frontend', 'Build one API-fed screen with loading, empty, and error states.', 'Keyboard use, state choices, focused tests, and a short handoff.', 'Your lead approves shared patterns and the final merge.'],
        ['Backend or API', 'Add a retry-safe endpoint with object-level authorization.', 'Contract, data rules, logs, failure tests, and access tests.', 'Your lead approves data changes, secrets, and release.'],
        ['Mobile', 'Diagnose offline sync or add one permission-bound feature.', 'Lifecycle behavior, storage, conflict handling, and device checks.', 'Your mobile owner approves release settings and store delivery.'],
        ['QA automation', 'Automate one path and diagnose a planted flaky test.', 'Stable selectors, isolation, failure evidence, and defect notes.', 'Your QA owner sets release gates and accepts known risk.'],
        ['Platform', 'Review a sandbox change and write rollback steps.', 'Least privilege, secret handling, monitoring, and failure signals.', 'Your platform owner approves production access and rollout.'],
      ],
    },
    chart: {
      title: 'Suggested technical scorecard weighting by developer role',
      categories: [
        { label: 'Practical work', color: '#0f8f73' },
        { label: 'System reasoning', color: '#2563eb' },
        { label: 'Quality and security', color: '#7c3aed' },
        { label: 'Handoff', color: '#f27b3d' },
      ],
      rows: [
        { label: 'Frontend', values: [35, 25, 25, 15] },
        { label: 'Backend or API', values: [30, 35, 25, 10] },
        { label: 'Mobile', values: [35, 30, 25, 10] },
        { label: 'QA automation', values: [35, 20, 35, 10] },
        { label: 'Platform', values: [25, 40, 25, 10] },
      ],
      method: 'Units are percentage points of the total candidate score, and each role adds to 100%. These are editorial starting weights set before candidate review, not measured hiring outcomes, so adjust them to match the real ownership of one opening.',
    },
    graphic: {
      title: 'Anatomy of a fair developer work sample',
      steps: [
        { title: 'Brief', note: 'Name the stack, outcome, limits, and acceptance checks.' },
        { title: 'Safe inputs', note: 'Use synthetic data, fake secrets, and a sandbox repository.' },
        { title: 'Bounded task', note: 'Give one role-sized problem instead of live client work.' },
        { title: 'Evidence', note: 'Collect code, tests, a README, and a short handoff.' },
        { title: 'Independent score', note: 'Have reviewers score first, then compare notes.' },
      ],
    },
    quote: {
      text: 'Code review is a process in which code is reviewed by someone other than the author, often before the introduction of that code into a codebase.',
      by: 'Tom Manshreck and Caitlin Sadowski',
      role: 'authors of the Code Review chapter in Software Engineering at Google',
      sourceUrl: 'https://abseil.io/resources/swe-book/html/ch09.html',
    },
    relatedLinks: [
      { label: 'Review the developer provider questions', href: '/blog/developer-offshore-staffing-provider-questions', note: 'Use these questions after the role and assessment are clear. They help you check who screens, manages, and replaces a candidate.' },
      { label: 'Plan reporting and QA support', href: '/services/reporting-and-qa', note: 'See how a Philippines-based QA role can handle regression evidence and weekly quality notes. Keep release decisions with your own owner.' },
      { label: 'Use the first-week onboarding checklist', href: '/blog', note: 'Turn the selected role into a small first-week plan. Set repo access, review calls, tests, and daily updates before work begins.' },
      { label: 'Discuss a role-matched candidate plan', href: '/contact', note: 'Share the stack, role, schedule, and review owner you need. A staffing specialist can use that detail to discuss Philippines-based candidate fit.' },
    ],
    faqs: [
      { question: 'What should a software developer work sample include?', answer: 'Use one role-sized task, a sandbox repository, synthetic data, acceptance checks, and a short written handoff. Ask for code and focused tests, then review the pull request with the candidate.' },
      { question: 'Should candidates be allowed to use AI coding tools?', answer: 'Set one clear rule for everyone and ask candidates to mark assisted work. Score how they test, verify, explain, and correct the final code rather than scoring tool use by itself.' },
      { question: 'How do I assess a senior developer?', answer: 'Give the person a small design or change with real tradeoffs, then score system reasoning, failure handling, review quality, and ownership boundaries. Seniority should appear in the decisions and evidence, not only in framework names or years listed.' },
      { question: 'Who should make the final technical hiring decision?', answer: 'A named technical owner should review the sample evidence and approve the role fit. Staffing support can organize candidates and the process, but your team should keep final code, access, architecture, and release decisions.' },
    ],
    sources: [
      { name: 'Philippine Statistics Authority: 2019 functional literacy release', url: 'https://psa.gov.ph/content/functional-literacy-rate-estimated-916-percent-2019', note: 'Published in 2020; used only as broad population context.' },
      { name: 'Stack Overflow 2024 Developer Survey: AI', url: 'https://survey.stackoverflow.co/2024/ai', note: 'Used for AI use and trust responses.' },
      { name: 'GitHub Octoverse 2024', url: 'https://github.blog/news-insights/octoverse/octoverse-2024/', note: 'Used for public generative AI project activity.' },
      { name: 'OWASP Top 10 A01:2021 Broken Access Control', url: 'https://owasp.org/Top10/2021/A01_2021-Broken_Access_Control/index.html', note: 'Used for the contributed dataset occurrence and CVE counts.' },
      { name: 'NIST SP 800-53 Rev. 5, AC-6 Least Privilege', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Used for the access-control baseline.' },
      { name: 'GitHub Docs: About protected branches', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches', note: 'Used for repository review and merge controls.' },
      { name: 'Software Engineering at Google: Code Review', url: 'https://abseil.io/resources/swe-book/html/ch09.html', note: 'Source of the quoted code review definition.' },
    ],
  },
  {
    "slug": "developer-offshore-staffing-provider-questions",
    "title": "Questions to ask an offshore developer provider",
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
  },];

export const stats = [
  {label:'Suggested pilot',value:'14 days',note:'enough time to review real work before adding scope'},
  {label:'First backlog',value:'5-10 tickets',note:'specific tickets make interviews and review easier'},
  {label:'Final code approval',value:'Your tech lead',note:'keep architecture, security, and merge decisions in house'}
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get an offshore developer staffing plan based on your backlog, stack, schedule, and review process.',
  fit: [
    'software teams that need extra development capacity but do not want to screen alone',
    'tech leads who can review code but need help finding and managing candidates',
    'companies with a real backlog, documented tools, and clear ownership of technical decisions',
  ],
  included: [
    'a role planning call to turn backlog items into a clear developer brief',
    'candidate matching based on stack, seniority, schedule, and communication needs',
    'onboarding help for repo access, pull requests, testing, updates, and review rules',
    'a manager contact for attendance, fit, and replacement questions',
  ],
  proof: [
    'clear task scope before hiring',
    'a weekly written update',
    'one named contact for problems and escalation',
    'a handoff plan for repos, tickets, credentials, and code review',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which languages, frameworks, repos, ticket boards, and environments will the developer use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Meet the candidates', body: 'The staffing team matches developers to your stack, schedule, communication style, and required seniority.' },
  { step: '3', title: 'Run a small pilot', body: 'Start with sample tickets, limited access, daily updates, pull requests, and a scorecard your tech lead can use.' },
  { step: '4', title: 'Add work carefully', body: 'When the first tickets are solid, add more backlog items and adjust the review process based on what you learned.' },
] as const;

export const staffingFitNote = 'The right setup depends on the backlog, stack, seniority, schedule, access, and review time. Send those details so the staffing team can suggest a sensible first role.';
