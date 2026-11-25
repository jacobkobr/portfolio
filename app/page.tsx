import Link from 'next/link';
import {GitPullRequestIcon, FileIcon, PersonIcon, LocationIcon, LinkIcon, BookIcon, MarkGithubIcon} from '@primer/octicons-react';
import {profile, projects, commits, portfolioFiles} from './content';
import {Conversation, Commits, Files} from './views';
import {PrTabs} from './pr-tabs';

export default async function Page({searchParams}: {searchParams: Promise<{tab?: string}>}) {
  const {tab} = await searchParams;
  const active = tab === 'commits' || tab === 'files' ? tab : 'conversation';

  return (
    <main id="main" className="page">
      <div className="pr-heading">
        <h1>Add Jacob Kobrick <span>#1</span></h1>
        <div className="pr-meta"><span className="open-badge"><GitPullRequestIcon /> Open</span><span><strong>jacobkobr</strong> proposes <strong>{projects.length} projects</strong> from <code>jacob</code> into <code>portfolio</code></span></div>
      </div>
      <PrTabs active={active} commitCount={commits.length} fileCount={portfolioFiles.length} />
      {active === 'conversation' ? <div className="conversation-layout"><Conversation /><Sidebar /></div> :
        active === 'commits' ? <Commits /> : <Files />}
    </main>
  );
}

function Sidebar() {
  return <aside className="sidebar" aria-label="About Jacob">
    <section><h2>Author</h2><a className="author-link" href={profile.github}><PersonIcon /><strong>jacobkobr</strong></a><p><LocationIcon /> Tempe, Arizona</p></section>
    <section><h2>Experience</h2><strong>FOX Technology | Tempe, AZ</strong><p>Software Engineering Intern</p><p>June 2025 – Present</p></section>
    <section><h2>Education</h2><p><BookIcon /> Arizona State University</p><p>Barrett, The Honors College</p><p>B.S. in Computer Science - December 2027</p></section>
    <section><h2>Projects</h2>{projects.map(project => <Link className="sidebar-project" key={project.slug} href={`/projects/${project.slug}`}><FileIcon />{project.name}</Link>)}</section>
    <section><h2>Links</h2><a href={profile.github}><MarkGithubIcon /> GitHub profile</a><a className="sidebar-project" href={profile.linkedin}><LinkIcon /> LinkedIn</a></section>
  </aside>;
}
