import type {Metadata} from 'next';
import Link from 'next/link';
import {MarkGithubIcon} from '@primer/octicons-react';
import '@primer/primitives/dist/css/functional/themes/dark.css';
import '@primer/primitives/dist/css/base/size/size.css';
import {Theme, ThemeToggle} from './theme';
import {profile} from './content';
import './styles.css';

export const metadata: Metadata = {
  title: "Jacob Kobrick's Portfolio",
  description: 'My education, experience, and what I enjoy building!',
  icons: {
    icon: '/avatar.png',
    apple: '/avatar.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  // Primer's focus polyfill adds these attributes before React hydrates.
  return (
    <html lang="en" className="js-focus-visible" data-js-focus-visible="" data-color-mode="dark" data-dark-theme="dark">
      <body><Theme>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="global-bar">
            <a className="github-mark" href={profile.github} aria-label="Jacob Kobrick on GitHub"><MarkGithubIcon size={32} /></a>
            <div className="breadcrumbs"><a href={profile.github}>jacobkobr</a><span>/</span><Link href="/">portfolio</Link></div>
            <ThemeToggle />
          </div>
        </header>
        {children}
        <footer><span>Jacob Kobrick</span></footer>
      </Theme></body>
    </html>
  );
}
