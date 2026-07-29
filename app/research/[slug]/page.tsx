import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {articleThumbnail} from '../../article-thumbnails';
import {Header,Footer} from '../../components';
import {researchPosts,ResearchPost} from '../../fleet-data';
import {site} from '../../data';

export function generateStaticParams(){return researchPosts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const post=researchPosts.find(p=>p.slug===slug);if(!post)return{};const thumbnail=articleThumbnail('research',post.slug,post.title);const baseUrl=`https://${site.domain.toLowerCase()}`;const url=`${baseUrl}/research/${post.slug}`;return{title:post.title,description:post.excerpt,alternates:{canonical:url},openGraph:{title:post.title,description:post.excerpt,url,type:'article',images:[{url:`${baseUrl}${thumbnail.src}`,alt:thumbnail.alt}]}}}
export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const post:ResearchPost|undefined=researchPosts.find(p=>p.slug===slug);if(!post)notFound();const thumbnail=articleThumbnail('research',post.slug,post.title);return <><Header/><main><article className="section"><div className="container article-shell"><p className="eyebrow">{site.brand} research</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><img className="article-featured-image" src={thumbnail.src} alt={thumbnail.alt}/>{post.sections.map(s=><section className="card" key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>)}{post.sources?.length?<section className="card"><h2>Sources</h2><ul>{post.sources.map(s=><li key={s.url}><a href={s.url}>{s.name}</a></li>)}</ul></section>:null}</div></article></main><Footer/></>}
