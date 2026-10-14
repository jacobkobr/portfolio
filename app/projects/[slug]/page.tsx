import {notFound} from 'next/navigation';
import {projects, portfolioFiles} from '../../content';
import {FilePage} from '../../file-page';

export function generateStaticParams() {
  return projects.map(project => ({slug: project.slug}));
}

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const file = portfolioFiles.find(item => item.href === `/projects/${slug}`);
  if (!file) notFound();
  return <FilePage file={file} />;
}
