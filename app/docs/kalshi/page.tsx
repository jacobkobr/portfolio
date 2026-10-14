import Link from 'next/link';
import {FileIcon, ArrowLeftIcon, LinkExternalIcon} from '@primer/octicons-react';
import {ArticleFrame} from './article-frame';

export const metadata = {title: 'Prediction Market Inefficiency Research · Documentation · Jacob Kobrick'};

export default function KalshiDocsPage() {
  return <main id="main" className="page document-page">
    <Link className="back-link" href="/docs"><ArrowLeftIcon /> Back to Documentation</Link>
    <nav className="doc-path" aria-label="Document path"><Link href="/docs">docs</Link><span>/</span><strong>prediction_markets.html</strong></nav>
    <article className="file-box">
      <header className="file-header"><FileIcon /><strong>prediction_markets.html</strong><a className="file-action" href="/docs/kalshi/article" target="_blank" rel="noopener noreferrer" aria-label="Open full write-up in a new tab" title="Open full write-up in a new tab"><LinkExternalIcon /></a></header>
      <ArticleFrame />
    </article>
  </main>;
}
