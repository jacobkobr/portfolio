import path from 'node:path';
import Link from 'next/link';
import Markdown, {defaultUrlTransform} from 'react-markdown';
import {portfolioFiles} from './content';
import {BrandIcon} from './brand-icon';

export function MarkdownFile({file}: {file: {path: string; source: string}}) {
  return <div className="markdown">
    <Markdown
      urlTransform={url => {
        const target = path.posix.normalize(path.posix.join(path.posix.dirname(file.path), url));
        const page = portfolioFiles.find(item => item.path === target);
        if (page) return page.href;
        if (target === 'docs/prediction_markets.html') return '/docs/kalshi';
        if (target.startsWith('public/')) return `/${target.slice(7)}`;
        return defaultUrlTransform(url);
      }}
      components={{a: ({href, children}) => href?.startsWith('/')
        ? <Link href={href}>{children}</Link>
        : <a href={href}><BrandIcon href={href ?? ''} />{children}</a>}}
    >{file.source}</Markdown>
  </div>;
}
