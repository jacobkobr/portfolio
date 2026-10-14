'use client';

import {useEffect} from 'react';
import {BaseStyles, useTheme} from '@primer/react';
import {ThemeProvider} from '@primer/react/next';

export function Theme({children}: {children: React.ReactNode}) {
  return <ThemeProvider colorMode="auto"><BaseStyles>{children}</BaseStyles></ThemeProvider>;
}

export function ThemeSelect() {
  const {colorMode, setColorMode} = useTheme();

  useEffect(() => {
    // Storage can be unavailable in restricted browsing contexts.
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark' || saved === 'auto') setColorMode(saved);
    } catch {}
  }, [setColorMode]);

  return (
    <label className="theme-select">
      <span>Theme</span>
      <select value={colorMode} onChange={event => {
        const mode = event.target.value as 'auto' | 'light' | 'dark';
        setColorMode(mode);
        try { localStorage.setItem('portfolio-theme', mode); } catch {}
      }}>
        <option value="auto">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
