import {portfolioFiles} from '../../content';
import {FilePage} from '../../file-page';

export const metadata = {title: 'FOX Technology · Jacob Kobrick'};

export default function FoxPage() {
  return <FilePage file={portfolioFiles.find(file => file.path === 'experience/fox.md')!} />;
}
