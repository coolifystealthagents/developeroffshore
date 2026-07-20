import * as data from './data';
import { Header, Footer, JsonLd } from './components';

const dataAny = data as any;
const site = dataAny.site || {};
const services = (dataAny.services || dataAny.roles || dataAny.industries || []).slice(0, 6);
const posts = (dataAny.blogPosts || []).slice(0, 4);
const stats = (dataAny.stats || []).slice(0, 3);
const process = (dataAny.staffingProcess || dataAny.checklistSteps || []).slice(0, 5);
const questions = (dataAny.leadQuestions || dataAny.faqs || []).slice(0, 5);
const compare = (dataAny.compareRows || dataAny.proofCards || dataAny.sourcePlaceholders || []).slice(0, 4);
const offer = dataAny.staffingOffer || {};
const getTitle = (item: any, fallback = 'Service') => typeof item === 'string' ? item : (item.title || item.name || item.label || item.question || fallback);
const getText = (item: any, fallback = 'Clear scope, simple handoff, and a practical staffing plan built around the work.') => typeof item === 'string' ? item : (item.desc || item.body || item.excerpt || item.note || item.answer || fallback);

export default function Home(){
  const schema = { '@context':'https://schema.org', '@type':'WebSite', name: site.brand, url: `https://${site.domain}` };
  return <><Header/><main>
    <JsonLd data={schema}/>
    <section className="hero-shell">
      <div className="hero-kicker"><span>{site.badge || 'Staffing guide'}</span><span>{site.domain}</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Dark developer console</p>
          <h1>Developer Offshore built as a sprint console.</h1>
          <p className="lead">A redesigned developer offshore staffing guide for software teams that want offshore developers without hiring chaos. The page now uses a distinct compact asymmetric console layout, industry-specific planning sections, and a conversion path that feels made for this niche.</p>
          <div className="hero-actions"><a className="btn primary" href="/contact">Request staffing plan</a><a className="btn secondary" href="#services">Explore the plan</a></div>
        </div>
        <figure className="hero-media"><img src={site.heroImage || site.serviceImage} alt={site.alt || `${site.brand} planning visual`}/><figcaption>terminal frames and code-like dividers</figcaption></figure>
      </div>
    </section>

    <section className="briefing-note"><div><span>Memo</span><h2>{site.brand} planning brief</h2></div><p>{site.audience}. Use this page to compare services, define handoffs, and request a plan with fewer surprises.</p></section>
    <section className="coverage-matrix">{services.slice(0,5).map((item:any, idx:number)=><article key={idx}><span>{idx+1}</span><h3>{getTitle(item)}</h3><p>{getText(item)}</p></article>)}</section>
    <section className="decision-table"><h2>Decision checkpoints</h2>{compare.map((row:any, idx:number)=><div key={idx}><b>{getTitle(row,'Checkpoint')}</b><span>{getText(row)}</span></div>)}</section>

    <section className="service-index" id="services">
      <div className="section-label"><span>Service index</span><b>{String(services.length).padStart(2,'0')}</b></div>
      <div className="index-list">{services.map((item:any, idx:number)=><a className="index-row" href={`/services/${item.slug || String(getTitle(item)).toLowerCase().replace(/[^a-z0-9]+/g,'-')}`} key={idx}><span>{String(idx+1).padStart(2,'0')}</span><strong>{getTitle(item)}</strong><em>{getText(item)}</em></a>)}</div>
    </section>

    <section className="process-ribbon" id="process">
      <div><p className="eyebrow">Operating rhythm</p><h2>Turn the scope into a managed handoff.</h2></div>
      <div className="timeline">{process.map((item:any, idx:number)=><article key={idx}><span>{String(idx+1).padStart(2,'0')}</span><h3>{getTitle(item, `Step ${idx+1}`)}</h3><p>{getText(item)}</p></article>)}</div>
    </section>

    <section className="question-block">
      <div className="question-intro"><p className="eyebrow">Before you request help</p><h2>Answer these before the first match.</h2><p>{dataAny.staffingFitNote || 'The best plan depends on scope, tools, schedule, skills, and the way quality will be checked.'}</p></div>
      <ul>{questions.map((q:any, idx:number)=><li key={idx}><span>{idx+1}</span>{getTitle(q, String(q))}</li>)}</ul>
    </section>

    <section className="resource-strip">
      <div><p className="eyebrow">Resource library</p><h2>Read the guides before you scale.</h2></div>
      <div className="resource-grid">{posts.map((post:any, idx:number)=><a href={`/blog/${post.slug || '#'}`} key={idx}><span>{post.minutes || 7} min</span><strong>{getTitle(post)}</strong><p>{getText(post)}</p></a>)}</div>
    </section>

    <section className="final-cta"><p className="eyebrow">Next step</p><h2>Send the role details and get the plan.</h2><p>{offer.promise || 'Share the work you want off your plate and get a practical staffing plan.'}</p><a className="btn primary" href="/contact">Request staffing plan</a></section>
  </main><Footer/></>;
}
