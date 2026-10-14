import Link from 'next/link';

export default function NotFound() {
  return <main id="main" className="page"><h1>Project not found</h1><p><Link href="/?tab=files">Browse project files</Link></p></main>;
}
