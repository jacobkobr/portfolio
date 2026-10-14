import Link from 'next/link';
import {ArrowLeftIcon, FileIcon} from '@primer/octicons-react';
import {portfolioFiles} from './content';
import {readPortfolioFile} from './portfolio-files';
import {MarkdownFile} from './markdown';

export async function FilePage({file}: {file: typeof portfolioFiles[number]}) {
  const content = await readPortfolioFile(file);
  return <main id="main" className="page project-page">
    <Link className="back-link" href={`/?tab=files#${content.id}`}><ArrowLeftIcon /> Back to Files changed</Link>
    <article className="file-box">
      <header className="file-header"><FileIcon /><strong>{file.path}</strong></header>
      <MarkdownFile file={content} />
    </article>
  </main>;
}
