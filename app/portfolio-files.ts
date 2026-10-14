import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {portfolioFiles} from './content';

export async function readPortfolioFile(file: typeof portfolioFiles[number]) {
  const filename = path.basename(file.path);
  const location = file.path === 'README.md'
    ? path.join(process.cwd(), 'README.md')
    : file.path.startsWith('experience/')
      ? path.join(process.cwd(), 'experience', filename)
      : path.join(process.cwd(), 'projects', filename);
  return {
    ...file,
    id: file.path.replaceAll(/[/.]/g, '-'),
    source: await readFile(location, 'utf8'),
  };
}

export async function readPortfolioFiles() {
  return Promise.all(portfolioFiles.map(readPortfolioFile));
}
