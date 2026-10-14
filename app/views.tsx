import Link from 'next/link';
import {Avatar, Label} from '@primer/react';
import {GitCommitIcon, FileIcon, ChevronDownIcon, CodeIcon, ArrowRightIcon} from '@primer/octicons-react';
import {profile, projects, milestones, skillGroups} from './content';

export function Conversation() {
  return <div className="timeline">
    <a className="comment-avatar" href={profile.github} aria-label="Jacob Kobrick on GitHub"><Avatar src="/avatar.png" alt="" size={40} /></a>
    <article className="comment-box">
      <header className="comment-header"><span><strong>jacobkobr</strong> <span className="muted">opened this portfolio</span></span><Label>Author</Label></header>
      <div className="markdown">
        <h2>Hi, I’m Jacob.</h2>
        <p>{profile.introduction}</p>
        <h2>What I’ve been building</h2>
        {projects.map(project => <div className="project-summary" key={project.slug}><h3><Link href={project.href}>{project.name}</Link></h3><p>{project.summary}</p></div>)}
      </div>
    </article>
    <div className="timeline-event"><span className="event-icon"><GitCommitIcon /></span><p><Link href="/?tab=commits">Project history</Link><br /><span className="muted">Notes from each project.</span></p></div>
    <div className="timeline-end"><FileIcon /><strong>{projects.length} project files</strong><Link href="/?tab=files">View files <ArrowRightIcon /></Link></div>
  </div>;
}

export function Commits() {
  const history = projects.map(project => ({
    ...project,
    milestones: milestones.filter(milestone => milestone.project === project.slug),
  })).sort((a, b) => a.milestones[0].date.localeCompare(b.milestones[0].date));

  return <section className="view-content" aria-labelledby="milestones-title">
    <h2 id="milestones-title">Selected projects</h2>
    <p className="view-description">Project notes and milestones, grouped by project.</p>
    <div className="milestones">{history.map(project => <div className="milestone" key={project.slug}>
      <GitCommitIcon />
      <article className="file-box">
        <header className="comment-header"><strong>{project.name}</strong><Label>{project.status}</Label></header>
        <div className="markdown">
          <p>{project.summary}</p>
          <p className="project-stack">{project.technologies.join(' · ')}</p>
          <ul className="project-milestones">{project.milestones.map(milestone => <li key={milestone.date}><time dateTime={milestone.date}>{milestone.date}</time><span>{milestone.title}</span></li>)}</ul>
          <Link href={project.href}>Read more <ArrowRightIcon /></Link>
        </div>
      </article>
    </div>)}</div>
  </section>;
}

export function Checks() {
  return <section className="view-content" aria-labelledby="skills-title">
    <h2 id="skills-title">Tools I’ve worked with</h2>
    <p className="view-description">Grouped by where I’ve used them.</p>
    <div className="checks-layout"><div className="checks-label"><CodeIcon /><strong>Project experience</strong><span className="muted">{skillGroups.length} areas</span></div>
      <div className="check-list">{skillGroups.map(group => <details className="check-row" key={group.name} open><summary><ChevronDownIcon /><CodeIcon /><strong>{group.name}</strong></summary><div><p>{group.description}</p><Link href={projects.find(project => project.slug === group.project)!.href}>View project <ArrowRightIcon /></Link></div></details>)}</div>
    </div>
  </section>;
}

export function Files() {
  return <section className="view-content" aria-labelledby="files-title">
    <div className="files-heading"><h2 id="files-title">{projects.length} project files</h2></div>
    <div className="file-list">{projects.map(project => <details className="file-box" key={project.slug}>
      <summary><ChevronDownIcon /><FileIcon /><strong>{project.slug === 'kalshi' ? 'docs/kalshi.html' : `projects/${project.slug}.md`}</strong></summary>
      <div className="file-entry"><span>{project.name}</span><Link href={project.href}>Open file <ArrowRightIcon /></Link></div>
    </details>)}</div>
  </section>;
}
