import {portfolioFiles} from '../content';
import {FilePage} from '../file-page';

export default function ReadmePage() {
  return <FilePage file={portfolioFiles[0]} />;
}
