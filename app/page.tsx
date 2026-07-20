import * as data from './data';
import { Header, Footer, JsonLd } from './components';
const d=data as any, site=d.site||{}, services=(d.services||[]).slice(0,6), posts=(d.blogPosts||[]).slice(0,3), stats=(d.stats||[]).slice(0,3), offer=d.staffingOffer||{};
const title=(x:any)=>typeof x==='string'?x:(x.title||x.name||x.label||x.question||'Role');
const text=(x:any)=>typeof x==='string'?x:(x.desc||x.excerpt||x.note||x.body||'Clear scope, review rhythm, and measurable handoff.');
const slug=(x:any)=>(x.slug||title(x).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''));

export default function Home(){const schema={'@context':'https://schema.org','@type':'WebSite',name:site.brand,url:`https://${site.domain}`};return <><Header/><main className="bdv"><JsonLd data={schema}/>
<section className="bdv-hero"><div className="bdv-container bdv-hero-grid"><div className="bdv-photo"><img src={site.heroImage} alt={site.alt||'offshore developer team'}/><div className="bdv-photo-tag">A small pod, built around your backlog</div></div><div className="bdv-copy"><p className="bdv-eyebrow">Offshore software development</p><h1>Add offshore developers without lowering your code standards.</h1><p>Hire for the stack and tickets you have now. Keep code approval with your tech lead, start with limited access, and see the work before you add more scope.</p><a className="bdv-cta" href="/contact">Talk through the role</a></div></div></section>
<section className="bdv-container bdv-proof"><h2>Start small enough to review the work properly.</h2><div>{stats.map((s:any,i:number)=><article key={i}><b>{s.value||s.label}</b><span>{s.label}</span></article>)}</div></section>
<section id="tasks" className="bdv-container bdv-services"><div className="bdv-head"><h2>Choose the work your team needs help with.</h2><a href="/contact">Ask about a developer role →</a></div><div className="bdv-service-grid">{[
  ['Front-End Development','Ship responsive React, Next.js, and design-system work with accessibility and performance checks.','React','Next.js','UI QA','A11y'],
  ['Back-End Development','Build APIs, database changes, integrations, and secure services with reviewable pull requests.','Node','Python','APIs','SQL'],
  ['AI & Automation','Build internal tools, scripts, model integrations, and data cleanup jobs while your team keeps review control.','LLMs','Python','Data','Ops'],
  ['QA and Testing','Cover regression tests, bug verification, release notes, and test evidence before merge.','QA','Playwright','Bugs','Release'],
  ['DevOps Support','Support CI/CD, staging environments, monitoring, and cloud handoff with limited access rules.','CI/CD','Cloud','Docker','Logs'],
  ['Product Delivery','Turn backlog items into scoped tickets, sprint updates, demos, and useful handoff notes.','Scrum','Tickets','Demos','Docs'],
].map(([name,copy,...tags])=><article key={name}><h3>{name}</h3><p>{copy}</p><div className="bdv-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></section>
<section className="bdv-dark"><div className="bdv-container bdv-dark-grid"><div><p className="bdv-eyebrow">Your first two weeks</p><h2>Give the developer real tickets, then review the result.</h2><p>Use a short pilot with limited access, pull request rules, and a scorecard your tech lead can fill out quickly.</p></div><div className="bdv-steps">{['Define the role','Meet candidates','Run the pilot','Decide what comes next'].map((x,i)=><article key={x}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b></article>)}</div></div></section>
<section className="bdv-container bdv-blog"><h2>Developer hiring guides</h2>{posts.map((p:any,i:number)=><a href={`/blog/${p.slug}`} key={i}><span>{p.minutes||7} min read</span><br/><b>{title(p)}</b><p>{text(p)}</p></a>)}</section>
<section className="bdv-final"><div className="bdv-container"><h2>Have a backlog but not enough developers?</h2><a className="bdv-cta" href="/contact">Request a staffing plan</a></div></section>
</main><Footer/></>}
