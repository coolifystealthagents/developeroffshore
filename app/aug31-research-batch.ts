import type { ResearchPost } from './fleet-data';
const related=[{title:'Research library',href:'/research'},{title:'Developer services',href:'/services'},{title:'Daily developer guides',href:'/blog'}];
const rows=[
  {
    "slug": "offshore-developer-flaky-test-quarantine-research-2026-08-31",
    "title": "When does test quarantine hide delivery risk?",
    "topic": "flaky automated checks",
    "signals": "quarantine age, failure signature, ownership, and user-path exposure"
  },
  {
    "slug": "offshore-developer-build-cache-trust-research-2026-08-31",
    "title": "What evidence makes a remote build cache trustworthy?",
    "topic": "shared build caches",
    "signals": "input identity, isolation, restore behavior, and clean-build comparison"
  },
  {
    "slug": "offshore-developer-api-rate-limit-simulation-research-2026-08-31",
    "title": "How should a distributed team simulate API rate limits?",
    "topic": "third-party API limits",
    "signals": "response fixtures, retry timing, concurrency, and recovery behavior"
  },
  {
    "slug": "offshore-developer-configuration-drift-research-2026-08-31",
    "title": "Which evidence reveals configuration drift before release?",
    "topic": "configuration drift",
    "signals": "declared settings, effective settings, environment differences, and change history"
  },
  {
    "slug": "offshore-developer-error-budget-handoff-research-2026-08-31",
    "title": "Can an error budget improve an offshore developer handoff?",
    "topic": "service reliability decisions",
    "signals": "user impact, observation window, unresolved risk, and accountable approval"
  }
] as const;
const sourceSet=[{name:'NIST Secure Software Development Framework',url:'https://csrc.nist.gov/pubs/sp/800/218/final'},{name:'Google Site Reliability Engineering',url:'https://sre.google/sre-book/table-of-contents/'},{name:'DORA research',url:'https://dora.dev/research/'},{name:'OWASP Code Review Guide',url:'https://owasp.org/www-project-code-review-guide/'}];
const paragraphs=(r:(typeof rows)[number])=>[`This report asks what evidence helps a software team reason about ${r.topic} when a Philippines-based developer works across time zones. The unit of analysis is one bounded engineering lane with a named reviewer and a written next decision. It examines ${r.signals}. It does not claim that one threshold or tool fits every product.`,`Begin with a reproducible sample and a declared observation window. Record the source revision, environment, fixture identity, timestamps in a consistent zone, expected behavior, observed behavior, and exclusions. Compare a normal case with failure, recovery, repetition, and ownership-boundary cases. Preserve raw observations separately from interpretation so another reviewer can challenge the conclusion.`,`Public guidance from NIST, Google SRE, DORA, and OWASP supplies useful evidence lenses for secure development, reliability, delivery performance, and review. Those sources do not determine a private team’s architecture or appetite for risk. Apply each principle to the selected lane, cite the source, and state where local evidence is missing.`,`The main analysis should distinguish system behavior from team activity. A count of events, checks, or comments can look precise while concealing whether users were affected or whether recovery works. Trace the behavior from trigger through processing, observation, and recovery. Pair volume with consequence and make ownership visible at every transition.`,`Counterevidence matters. A short sample can overrepresent a release, incident, new contributor, unusual dataset, or temporary provider fault. A synthetic test can omit production concurrency and historical state. A dashboard can aggregate away a narrow but serious failure. Record these conditions and avoid causal claims that the evidence cannot support.`,`The offshore developer may collect approved telemetry, build synthetic fixtures, run controlled comparisons, improve tests, and prepare a reversible change. Product meaning, security exceptions, protected data, production access, and accepted residual risk remain with accountable internal owners. No metric grants authority that the role does not otherwise have.`,`A cross-time-zone handoff should name the question, sample, revision, environment, commands, observed results, limitations, open risks, reviewer, and next action. It should also say what would falsify the current conclusion. This makes the next work window useful without turning an uncertain finding into a guarantee.`,`Useful evidence for ${r.topic} includes ${r.signals}. Review each signal for provenance, freshness, completeness, and connection to user-visible behavior. If two signals disagree, preserve both and investigate the boundary between them. Do not average incompatible observations into a reassuring single number.`,`The method has limits. It cannot prove every future workload, provider response, device, permission set, or historical record. It cannot establish legal compliance or replace architecture review. The conclusion therefore supports a bounded next action, such as a focused test, a reversible correction, a monitoring change, or escalation to the named owner.`,`A sound result is one another person can reproduce and use to make the next decision. For distributed development, that means the evidence package matters as much as the code change. The developer advances the technical inquiry; internal owners decide whether the remaining uncertainty is acceptable.`];
const fieldwork=(r:(typeof rows)[number])=>[
  `Before acting on ${r.topic}, define a stop rule. Stop when evidence touches protected data, requires new production access, changes an irreversible record, or reveals a security concern outside the approved lane. Also define a completion rule: the selected comparison has been repeated, its result is recorded, known gaps are named, and the accountable reviewer can choose the next action. These rules prevent an investigation from expanding quietly while people in another time zone are unavailable.`,
  `Keep a small evidence ledger for ${r.signals}. Each row should identify the source, collection time, revision or configuration, expected interpretation, observed value, and confidence limit. Link related rows instead of copying conclusions between tools. During review, ask whether stale evidence, missing events, sampling, aggregation, or observer effects could explain the result. Retain only the data the team is authorized to keep, and record the cleanup or expiry path for temporary artifacts.`,
  `Revisit the finding after one controlled change or one additional observation window. Compare the same fixtures and definitions so the before-and-after result remains meaningful. If the change improves one signal but worsens recovery, security, accessibility, or operator clarity, present the tradeoff instead of declaring success. A named internal owner decides whether to expand, revert, pause, or gather more evidence.`,
];
export const august31ResearchBatch: readonly ResearchPost[]=rows.map(r=>({slug:r.slug,title:r.title,excerpt:`Original research on ${r.topic}, with a bounded method for Philippines-based software delivery.`,published:'2026-08-31',sections:[...paragraphs(r),...fieldwork(r)].map((body,i)=>({heading:['Research question and scope','Methodology','Public evidence lens','Analysis','Counterevidence','Role boundary','Handoff record','Signals to inspect','Limitations','Conclusion','Stop and completion rules','Evidence ledger','Recheck after a controlled change'][i],body:[body]})),sources:sourceSet,keyStats:['One bounded lane and observation window','Four public evidence lenses','Explicit limitations and decision owner'],takeaways:['Separate observation from interpretation.','Test failure and recovery paths.','Keep accepted risk with the accountable owner.'],faqs:[{question:`What does this ${r.topic} report prove?`,answer:'It provides a reproducible way to inspect one bounded decision. It does not certify an entire system.'},{question:'What can an offshore developer contribute?',answer:'The developer can gather approved evidence, build fixtures, run checks, and document results while internal owners retain approval authority.'}],related}));
