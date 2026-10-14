import Link from 'next/link';
import {FileIcon, FileDirectoryIcon} from '@primer/octicons-react';

export default function DocsPage() {
  return <main id="main" className="page project-page">
    <h1>Documentation</h1>
    <p className="muted">Project write-ups and engineering notes.</p>
    <div className="file-box">
      <header className="file-header"><FileDirectoryIcon /><strong>docs</strong></header>
      <Link className="doc-row" href="/docs/prediction-market"><FileIcon /><strong>prediction-market.html</strong><span>Prediction market trading system</span></Link>
    </div>
  </main>;
}
