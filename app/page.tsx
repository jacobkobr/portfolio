import Link from 'next/link';
import {CounterLabel} from '@primer/react';
import {CommentDiscussionIcon, GitCommitIcon, GitPullRequestIcon, FileDiffIcon, FileIcon, PersonIcon, LocationIcon, LinkIcon, BookIcon, MarkGithubIcon} from '@primer/octicons-react';
import {profile, projects, commits, portfolioFiles} from './content';
import {Conversation, Commits, Files} from './views';

const tabs = [
  {id: 'conversation', name: 'Conversation', icon: CommentDiscussionIcon},
  {id: 'commits', name: 'Commits', icon: GitCommitIcon},
  {id: 'files', name: 'Files changed', icon: FileDiffIcon},
];

export default async function Page({searchParams}: {searchParams: Promise<{tab?: string}>}) {
  const {tab} = await searchParams;
  const active = tabs.find(item => item.id === tab)?.id ?? 'conversation';

  return (
    <main id="main" className="page">
      <div className="pr-heading">
        <h1>Add Jacob Kobrick <span>#1</span></h1>
        <div className="pr-meta"><span className="open-badge"><GitPullRequestIcon /> Open</span><span><strong>jacobkobr</strong> proposes <strong>{projects.length} projects</strong> from <code>jacob</code> into <code>portfolio</code></span></div>
      </div>
      <nav className="pr-tabs" aria-label="Pull request views">
        {tabs.map(({id, name, icon: Icon}) => <Link key={id} href={id === 'conversation' ? '/' : `/?tab=${id}`} aria-current={active === id ? 'page' : undefined}>
          <Icon /><span>{name}</span>
          {id === 'commits' && <CounterLabel>{commits.length}</CounterLabel>}
          {id === 'files' && <CounterLabel>{portfolioFiles.length}</CounterLabel>}
        </Link>)}
      </nav>
      {active === 'conversation' ? <div className="conversation-layout"><Conversation /><Sidebar /></div> :
        active === 'commits' ? <Commits /> : <Files />}
    </main>
  );
}

function Sidebar() {
  return <aside className="sidebar" aria-label="About Jacob">
    <section><h2>Author</h2><a className="author-link" href={profile.github}><PersonIcon /><strong>jacobkobr</strong></a><p>Jacob Kobrick</p><p><LocationIcon /> Tempe, Arizona</p></section>
    <section><h2>Experience</h2><strong>FOX Technology</strong><p>Software Engineering Intern</p><p>June 2025 – Present · Tempe, AZ</p></section>
    <section><h2>Education</h2><p><BookIcon /> Arizona State University</p><p>B.S. in Computer Science - December 2027</p></section>
    <section><h2>Projects</h2>{projects.map(project => <Link className="sidebar-project" key={project.slug} href={`/projects/${project.slug}`}><FileIcon />{project.name}</Link>)}</section>
    <section><h2>Links</h2><a href={profile.github}><MarkGithubIcon /> GitHub profile</a><a className="sidebar-project" href={profile.linkedin}><LinkIcon /> LinkedIn</a></section>
  </aside>;
}
