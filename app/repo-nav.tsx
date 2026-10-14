'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {BookIcon, CodeIcon, GitPullRequestIcon} from '@primer/octicons-react';

export function RepoNav() {
  const pathname = usePathname();
  const inDocs = pathname.startsWith('/docs');
  const inCode = pathname.startsWith('/projects') || pathname.startsWith('/experience') || pathname === '/readme';
  const inPullRequest = !inDocs && !inCode;
  return <nav className="repo-nav" aria-label="Repository">
    <Link href="/projects" className={inCode ? 'repo-active' : undefined} aria-current={inCode ? 'page' : undefined}><CodeIcon /> Code</Link>
    <Link href="/" className={inPullRequest ? 'repo-active' : undefined} aria-current={inPullRequest ? 'page' : undefined}><GitPullRequestIcon /> Pull requests</Link>
    <Link href="/docs" className={inDocs ? 'repo-active' : undefined} aria-current={inDocs ? 'page' : undefined}><BookIcon /> Documentation</Link>
  </nav>;
}
