import Link from 'next/link';
import {Avatar, Label} from '@primer/react';
import {GitCommitIcon, FileIcon, ArrowRightIcon, CodeIcon} from '@primer/octicons-react';
import {profile, projects, commits, portfolioFiles} from './content';
import {readPortfolioFiles} from './portfolio-files';
import {MarkdownFile} from './markdown';
import {FileBrowser} from './file-browser';

export function Conversation() {
  return <div className="timeline">
    <a className="comment-avatar" href={profile.github} aria-label="Jacob Kobrick on GitHub"><Avatar src="/avatar.png" alt="" size={40} /></a>
    <article className="comment-box">
      <header className="comment-header"><span><strong>jacobkobr</strong> <span className="muted">opened this portfolio</span></span><Label>Author</Label></header>
      <div className="markdown">
        <h2>Hi, I’m Jacob.</h2>
        <p>I’m studying computer science at Arizona State University and expect to finish my B.S. in December 2027.</p>
        <h2>Experience</h2>
        <p><strong><Link href="/experience/fox">FOX Technology</Link></strong><br />Software Engineering Intern<br />June 2025 – Present · Tempe, AZ</p>
        <h2>What I’ve been building</h2>
        <ul className="project-overview">{projects.map(project => <li key={project.slug}>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>: {project.summary}
        </li>)}</ul>
        <h2>Documentation</h2>
        <p><Link href="/docs/prediction-market">Building an Automated Prediction Market Trading System</Link><br />How I tested the strategies, what didn’t work, and what happened when I started trading live.</p>
      </div>
    </article>
    <div className="timeline-event"><span className="event-icon"><GitCommitIcon /></span><p><Link href="/?tab=commits">View portfolio updates</Link></p></div>
    <div className="timeline-end"><FileIcon /><strong>{portfolioFiles.length} files</strong><Link href="/?tab=files">View files <ArrowRightIcon /></Link></div>
  </div>;
}

export function Commits() {
  return <section className="view-content" aria-labelledby="commits-title">
    <div className="commit-timeline"><section className="commit-group">
      <h2 id="commits-title"><GitCommitIcon />Portfolio updates</h2>
      <ul className="commit-list">{commits.map(commit => <li className="commit-row" id={commit.id} key={commit.id}>
        <div className="commit-content">
          <Link className="commit-title" href={`/?tab=files#${commit.files[0].path.replaceAll(/[/.]/g, '-')}`}>{commit.message}</Link>
          <div className="commit-meta">
            <a className="commit-author" href={profile.github}><Avatar src="/avatar.png" alt="" size={20} />{profile.username}</a>
            <span>committed</span>
          </div>
        </div>
        <div className="commit-actions">
        <details className="commit-files">
          <summary>{commit.files.length} {commit.files.length === 1 ? 'file' : 'files'}</summary>
          <ul>{commit.files.map(file => <li key={file.path}><Link href={`/?tab=files#${file.path.replaceAll(/[/.]/g, '-')}`}>{file.path}</Link></li>)}</ul>
        </details>
        <Link className="commit-link" href={`/?tab=files#${commit.files[0].path.replaceAll(/[/.]/g, '-')}`} aria-label={`View files: ${commit.message}`}><CodeIcon /></Link>
        </div>
      </li>)}</ul>
    </section></div>
  </section>;
}

export async function Files() {
  const files = await readPortfolioFiles();
  return <FileBrowser files={files.map(file => ({id: file.id, path: file.path, preview: <MarkdownFile file={file} />}))} />;
}
