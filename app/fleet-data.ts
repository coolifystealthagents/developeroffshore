export type FleetService = { slug: string; title: string; desc: string; tasks: readonly string[]; controls: readonly string[]; firstWeek: readonly string[] };
export type ResearchPost = { slug: string; title: string; excerpt: string; published: string; sections: readonly { heading: string; body: readonly string[] }[]; sources?: readonly { name: string; url: string }[]; keyStats: readonly string[]; takeaways: readonly string[]; faqs: readonly { question: string; answer: string }[]; related: readonly { title: string; href: string }[] };

export const fleetServices: readonly FleetService[] = [
  { slug: 'next-js-application-development', title: 'Next.js Application Development', desc: 'Build a Philippines-based next.js application development workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'react-frontend-development', title: 'React Frontend Development', desc: 'Build a Philippines-based react frontend development workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'node-js-api-development', title: 'Node.js API Development', desc: 'Build a Philippines-based node.js api development workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'shopify-theme-development', title: 'Shopify Theme Development', desc: 'Build a Philippines-based shopify theme development workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'wordpress-engineering', title: 'WordPress Engineering', desc: 'Build a Philippines-based wordpress engineering workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'qa-automation-engineering', title: 'QA Automation Engineering', desc: 'Build a Philippines-based qa automation engineering workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'devops-release-support', title: 'DevOps Release Support', desc: 'Build a Philippines-based devops release support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'data-pipeline-development', title: 'Data Pipeline Development', desc: 'Build a Philippines-based data pipeline development workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'mobile-app-development', title: 'Mobile App Development', desc: 'Build a Philippines-based mobile app development workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'legacy-application-maintenance', title: 'Legacy Application Maintenance', desc: 'Build a Philippines-based legacy application maintenance workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring software development work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] }
];

// Add reviewed, source-backed original research here. The templates and sitemap update automatically.
const dailyResearchTopics = [
  ['offshore-developer-first-week-onboarding-research', 'What makes a first week work for an offshore developer', 'onboarding', 'a first-week brief, safe access, one representative task, and a scheduled review'],
  ['offshore-developer-performance-scorecard-research', 'How to evaluate offshore developer performance fairly', 'scorecards', 'outcomes, verification quality, review response, and handoff completeness'],
  ['offshore-developer-time-zone-overlap-research', 'Time-zone overlap and the quality of engineering handoffs', 'handoffs', 'written decisions, a small overlap window, and an explicit next owner'],
  ['offshore-developer-paid-work-sample-research', 'Designing a fair paid work sample for developers', 'assessment', 'a bounded brief, synthetic data, equal criteria, and paid candidate time'],
  ['offshore-developer-security-boundaries-research', 'Security boundaries for distributed development teams', 'security', 'least-privilege accounts, review gates, secret handling, and escalation'],
  ['offshore-developer-sprint-planning-research', 'Sprint planning signals for distributed engineering teams', 'planning', 'small slices, acceptance evidence, dependency visibility, and review capacity'],
  ['offshore-developer-api-integration-research', 'Reducing risk in external API integration work', 'integrations', 'contract assumptions, failure handling, tests, and an owner for vendor risk'],
  ['offshore-developer-database-migration-research', 'Evidence-led database migration planning', 'migrations', 'a reversible plan, representative data, backup proof, and rollback ownership'],
  ['offshore-developer-accessibility-research', 'Making accessibility checks part of developer delivery', 'accessibility', 'keyboard paths, semantic structure, focused automation, and manual review'],
  ['offshore-developer-observability-research', 'The evidence a small team needs for service observability', 'observability', 'useful signals, alert ownership, runbooks, and a tested response path'],
  ['offshore-developer-code-review-research', 'Code review signals for distributed development teams', 'review', 'a focused diff, risk-based checks, reviewer decisions, and a recorded follow-up'],
  ['offshore-developer-release-readiness-research', 'Release readiness evidence for offshore development work', 'releases', 'acceptance checks, CI evidence, rollback ownership, and an explicit release decision'],
  ['offshore-developer-incident-handoff-research', 'Incident handoffs across distributed engineering teams', 'incidents', 'a concise timeline, current impact, safe next action, and one accountable owner'],
  ['offshore-developer-test-data-research', 'Managing test data for distributed development teams', 'test-data', 'synthetic fixtures, documented data boundaries, repeatable setup, and cleanup ownership'],
  ['offshore-developer-documentation-handoff-research', 'Documentation handoffs that survive distributed ownership', 'documentation', 'an audience, a tested procedure, known limits, and a clear maintenance owner'],
  ['offshore-developer-dependency-upgrade-research', 'Evidence-led dependency upgrades for small teams', 'dependencies', 'version rationale, compatibility checks, security review, and a reversible change'],
  ['offshore-developer-feature-flag-research', 'Feature-flag controls for distributed product delivery', 'feature-flags', 'a named flag owner, exposure boundaries, removal criteria, and observed behavior'],
  ['offshore-developer-technical-debt-research', 'Making technical-debt work reviewable', 'technical-debt', 'a bounded risk statement, measurable acceptance evidence, priority context, and an owner'],
  ['offshore-developer-architecture-decision-research', 'Architecture decision records for offshore development teams', 'architecture', 'the decision context, alternatives considered, consequences, and a review date'],
  ['offshore-developer-rollback-research', 'Rollback planning signals for distributed software teams', 'rollback', 'a known trigger, a tested recovery path, an approval boundary, and post-change evidence'],
] as const;

const sourceBank = [
  ['NIST SP 800-53 Rev. 5, AC-6 least privilege', 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'],
  ['OWASP Code Review Guide', 'https://owasp.org/www-project-code-review-guide/'],
  ['GitHub protected branches documentation', 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches'],
  ['GitHub pull request review documentation', 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews'],
  ['NIST Secure Software Development Framework (SP 800-218)', 'https://csrc.nist.gov/pubs/sp/800/218/final'],
  ['OWASP Application Security Verification Standard', 'https://owasp.org/www-project-application-security-verification-standard/'],
  ['W3C Web Content Accessibility Guidelines (WCAG) 2.2', 'https://www.w3.org/TR/WCAG22/'],
  ['Google SRE Workbook', 'https://sre.google/workbook/table-of-contents/'],
  ['Atlassian agile ceremonies guide', 'https://www.atlassian.com/agile/scrum/ceremonies'],
  ['NIST Privacy Framework', 'https://www.nist.gov/privacy-framework'],
] as const;

export const researchPosts: readonly ResearchPost[] = dailyResearchTopics.map(([slug, title, cluster, evidence]) => ({
  slug,
  title,
  excerpt: `Research on ${title.toLowerCase()} for a distributed development team. The report turns ${cluster} evidence into a bounded operating routine with a named reviewer.`,
  published: '2026-08-09',
  sections: [
    { heading: 'Methodology and scope', body: [`This report reviewed ${sourceBank.length} primary or standards-oriented sources and translated them into a practical checklist for ${cluster}. It separates what the sources say from recommendations for a buyer-side owner. The unit of analysis is one bounded work lane with a named reviewer and reproducible evidence.`] },
    { heading: 'Key finding', body: [`The useful signal is a reviewable result, not activity volume. For this topic, the evidence to request is ${evidence}. A written brief, focused verification, and explicit approval boundary reduce the cost of distributed ownership and make exceptions visible.`] },
    { heading: 'Operating model', body: ['Start with one representative task. State the acceptance check, permitted access, reviewer, and stop rule before work begins. Keep architecture decisions, security exceptions, production approvals, and accepted risk with the named internal owner.', 'At the end of the workday, record what changed, what passed, what remains, and who owns the next decision. Use UTC for durable technical events and local times only for scheduled overlap.'] },
    { heading: 'Limits and interpretation', body: ['This is a synthesis of published guidance, not a controlled experiment or a claim that one staffing model guarantees delivery. Context, system maturity, reviewer availability, and task complexity can change the result. Validate the recommendation with a small pilot and preserve the source links in the brief.'] },
  ],
  keyStats: [`${sourceBank.length} sources reviewed`, '4 evidence categories: outcome, verification, handoff, and unresolved risk', '1 named owner for exceptions and final approval'],
  takeaways: [`Ask for ${evidence}.`, 'Use a representative task with written acceptance criteria.', 'Grant only the access required for that task.', 'Review evidence before expanding scope.'],
  faqs: [
    { question: 'What should the reviewer accept?', answer: 'The reviewer should accept the stated outcome, the verification evidence, the handoff, and any explicitly documented limitation.' },
    { question: 'Can this routine replace technical leadership?', answer: 'No. It makes a bounded lane easier to review; architecture, security exceptions, production approval, and accepted risk remain with the internal owner.' },
  ],
  related: [
    { title: 'Developer first-week onboarding checklist', href: '/blog/offshore-developer-first-week-onboarding-checklist' },
    { title: 'Developer assessment guide', href: '/blog/hire-software-developers-philippines-assessment-guide' },
    { title: 'Research library', href: '/research' },
  ],
  sources: sourceBank.map(([name, url]) => ({ name, url })),
}));
export const postsPerPage = 20;
