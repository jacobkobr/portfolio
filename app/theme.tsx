'use client';

import {BaseStyles} from '@primer/react';
import {MoonIcon} from '@primer/octicons-react';
import {ThemeProvider} from '@primer/react/next';

export function Theme({children}: {children: React.ReactNode}) {
  return <ThemeProvider colorMode="dark"><BaseStyles>{children}</BaseStyles></ThemeProvider>;
}

export function ThemeToggle() {
  return <button className="theme-toggle" type="button" role="switch" aria-checked="true" aria-label="Dark mode"
    onClick={() => window.alert('403: Insufficient taste.')}>
    <MoonIcon size={20} />
  </button>;
}
