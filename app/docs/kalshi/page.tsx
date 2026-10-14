import Link from 'next/link';
import {FileIcon, BookIcon} from '@primer/octicons-react';
import {ArticleFrame} from './article-frame';

export const metadata = {title: 'Kalshi · Documentation · Jacob Kobrick'};

export default function KalshiDocsPage() {
  return <main id="main" className="page">
    <div className="docs-layout">
      <aside className="docs-sidebar" aria-label="Documentation files">
        <Link href="/docs"><BookIcon /> Documentation</Link>
        <Link className="doc-selected" href="/docs/kalshi" aria-current="page"><FileIcon /> kalshi.html</Link>
        <Link href="/?tab=files">Back to Files changed</Link>
      </aside>
      <div className="docs-content">
        <nav className="doc-path" aria-label="Document path"><Link href="/docs">docs</Link><span>/</span><strong>kalshi.html</strong></nav>
        <div className="file-box">
          <header className="file-header"><FileIcon /><strong>Preview</strong><a href="/docs/kalshi/article">Open full page</a></header>
          <ArticleFrame />
        </div>
      </div>
    </div>
  </main>;
}
