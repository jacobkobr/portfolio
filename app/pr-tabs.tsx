'use client';

import Link from 'next/link';
import {CounterLabel, Tooltip} from '@primer/react';
import {CommentDiscussionIcon, GitCommitIcon, FileDiffIcon} from '@primer/octicons-react';

const tabs = [
  {id: 'conversation', name: 'Conversation', description: 'About me, education, and experience', icon: CommentDiscussionIcon},
  {id: 'commits', name: 'Commits', description: 'Updates to my portfolio', icon: GitCommitIcon},
  {id: 'files', name: 'Files changed', description: 'Browse my projects and experience', icon: FileDiffIcon},
];

// Keep the tooltip and its trigger together across the server/client boundary.
export function PrTabs({active, commitCount, fileCount}: {active: string; commitCount: number; fileCount: number}) {
  return <nav className="pr-tabs" aria-label="Pull request views">
    {tabs.map(({id, name, description, icon: Icon}) => <Tooltip key={id} text={description} delay="short" type="description">
      <Link href={id === 'conversation' ? '/' : `/?tab=${id}`} aria-current={active === id ? 'page' : undefined}>
        <Icon /><span>{name}</span>
        {id === 'commits' && <CounterLabel>{commitCount}</CounterLabel>}
        {id === 'files' && <CounterLabel>{fileCount}</CounterLabel>}
      </Link>
    </Tooltip>)}
  </nav>;
}
