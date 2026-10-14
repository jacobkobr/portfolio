import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Label} from '@primer/react';
import {ArrowLeftIcon, FileIcon} from '@primer/octicons-react';
import {projects} from '../../content';

export function generateStaticParams() {
  return projects.filter(project => project.slug !== 'kalshi').map(project => ({slug: project.slug}));
}

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();

  return <main id="main" className="page project-page">
    <Link className="back-link" href="/?tab=files"><ArrowLeftIcon /> Back to Files changed</Link>
    <article className="file-box">
      <header className="file-header"><FileIcon /><span>projects / <strong>{project.slug}.md</strong></span><Label>{project.status}</Label></header>
      <div className="markdown project-detail"><h1>{project.name}</h1><p>{project.summary}</p><p className="project-stack">{project.technologies.join(' · ')}</p>
        {project.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
        {project.links.length > 0 && <section><h2>Links</h2><ul>{project.links.map(link => <li key={link.url}><a href={link.url}>{link.label}</a></li>)}</ul></section>}
      </div>
    </article>
  </main>;
}
