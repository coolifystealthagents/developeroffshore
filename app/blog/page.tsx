import { FeaturedComparison } from './FeaturedComparison';
import { Header, Footer } from '../components';
import { blogPosts, site } from '../data';
import { postsPerPage } from '../fleet-data';
import { articleThumbnail } from '../article-thumbnails';

export const metadata = {
  title: `Blog | ${site.brand}`,
  description: `Philippines-based ${site.primary} planning guides.`,
};

export default function Blog() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  const posts = [...blogPosts].sort((a, b) => (b.datePublished ?? '').localeCompare(a.datePublished ?? '')).slice(0, postsPerPage);
  return <><Header/><main><FeaturedComparison/><section className="fleet-hero variant-3"><div className="container"><p className="eyebrow">Blog</p><h1>Developer Offshore guides</h1><p className="lead">Practical planning for Philippines-based software development roles, workflows, and manager handoffs.</p></div></section><section className="section"><div className="container fleet-service-grid">{posts.map((post) => {
    const thumbnail = articleThumbnail('blog', post.slug, post.title);
    return <a className="card article-card" href={`/blog/${post.slug}`} key={post.slug}><img src={thumbnail.src} alt={thumbnail.alt}/><h2>{post.title}</h2><p>{post.excerpt}</p><b>Read article →</b></a>;
  })}</div><nav className="pagination" aria-label="Blog pages">{Array.from({length: pages}, (_, index) => <a aria-current={index === 0 ? 'page' : undefined} href={index === 0 ? '/blog' : `/blog/page/${index + 1}`} key={index}>{index + 1}</a>)}</nav></section></main><Footer/></>;
}
