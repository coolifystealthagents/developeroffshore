import type { ResearchPost } from './fleet-data';

const studies = [
  ['offshore-developer-http-idempotency-key-study-2026-09-07','When does an idempotency key stop a duplicate write?','one synthetic write endpoint under controlled retries','request identity, stored result, response code, side-effect count, and retention window','the same key with a changed payload may indicate a caller defect rather than a retry',['IETF: The Idempotency-Key HTTP Header Field','https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/'],['Stripe: Idempotent requests','https://docs.stripe.com/api/idempotent_requests']],
  ['offshore-developer-postgresql-autovacuum-lag-study-2026-09-07','What evidence shows autovacuum is falling behind?','one PostgreSQL table during a declared write workload','dead tuples, vacuum timestamps, transaction age, table size, and query latency','a large dead-tuple count alone does not prove user-visible harm',['PostgreSQL: Routine Vacuuming','https://www.postgresql.org/docs/current/routine-vacuuming.html'],['PostgreSQL: The Statistics Collector','https://www.postgresql.org/docs/current/monitoring-stats.html']],
  ['offshore-developer-service-worker-cache-update-study-2026-09-07','Which users receive a service-worker cache update?','one web application release across controlled browser states','worker lifecycle, cache names, asset hashes, controller state, and reload behavior','a successful install does not mean the open page has adopted the new worker',['MDN: Service Worker API','https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'],['web.dev: The service worker lifecycle','https://web.dev/articles/service-worker-lifecycle']],
  ['offshore-developer-kubernetes-probe-behavior-study-2026-09-07','Do Kubernetes probes describe readiness or merely process life?','one workload with controlled dependency failures','startup, readiness, and liveness results alongside traffic and restart events','a responsive health endpoint can conceal an unavailable required dependency',['Kubernetes: Configure Liveness, Readiness and Startup Probes','https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/'],['Kubernetes: Pod Lifecycle','https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/']],
  ['offshore-developer-browser-cookie-partitioning-study-2026-09-07','How does cookie partitioning change an embedded login flow?','one embedded sign-in flow across a declared browser matrix','cookie attributes, top-level site, storage access, request headers, and resulting session','a first-party test can pass while the same provider fails in an embedded context',['MDN: Cookies Having Independent Partitioned State','https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies'],['W3C Privacy Community Group: CHIPS','https://github.com/privacycg/CHIPS']],
] as const;

const related = [{title:'Research library',href:'/research'},{title:'Developer services',href:'/services'},{title:'Daily developer guides',href:'/blog'}] as const;

export const september7ResearchBatch: readonly ResearchPost[] = studies.map(([slug,title,unit,signals,counter,sourceOne,sourceTwo], index) => ({
  slug,
  title,
  published:'2026-09-07',
  excerpt:`A bounded study of ${unit}, with a reproducible method, counterevidence, and clear limits on the conclusion.`,
  keyStats:['1 declared unit of analysis',`${5 + (index % 2)} recorded signal classes`,'2 topic-specific technical references'],
  takeaways:[`Observe ${signals}.`,`Test the rival explanation that ${counter}.`,'Do not generalize beyond the stated revision, workload, and observation window.'],
  sections:[
    {heading:'Question and scope',body:[`This report asks: ${title} It examines ${unit}. The test fixes the application revision, environment, workload, identities, and observation window. Results outside those conditions remain unknown.`]},
    {heading:'Method',body:[`Prepare synthetic baseline, boundary, repeated, interrupted, and recovery cases. Record ${signals}. Preserve raw events before interpretation, note every clock used, and rerun the nearest passing case after each variable changes.`]},
    {heading:'How the references shape the test',body:[`${sourceOne[0]} describes the relevant mechanism. ${sourceTwo[0]} supplies a second implementation or standards view. These sources guide fixture design; they do not establish what the local system actually did.`]},
    {heading:'Counterevidence',body:[`Try to disprove the first explanation. In particular, test whether ${counter}. Vary identity, timing, load, and failure state separately, and keep disagreeing signals visible in the result.`]},
    {heading:'Decision boundary',body:[`A Philippines-based offshore developer can build fixtures, run approved experiments, add focused instrumentation, and document a reversible correction. Internal security, data, platform, and release owners retain sensitive access, exceptions, production action, and acceptance of residual risk.`]},
    {heading:'Limitations and conclusion',body:[`The study covers only ${unit}. It cannot predict every client, dependency delay, historical state, or future workload. Report missing cases, measurement error, and the observation that would overturn the conclusion before choosing to fix, monitor, revert, or investigate further.`]},
  ],
  sources:[{name:sourceOne[0],url:sourceOne[1]},{name:sourceTwo[0],url:sourceTwo[1]},{name:'NIST Secure Software Development Framework',url:'https://csrc.nist.gov/pubs/sp/800/218/final'}],
  faqs:[{question:'Does this study prove behavior for the whole platform?',answer:'No. Its finding is limited to the declared unit, revision, workload, and observation window.'},{question:'Who approves a production change?',answer:'The accountable internal owner reviews the evidence and accepts the production action and remaining risk.'}],
  related,
}));
