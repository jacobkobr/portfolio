'use client';

import {useEffect, useRef, useState} from 'react';
import {useTheme} from '@primer/react/next';

export function ArticleFrame() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  const {resolvedColorMode} = useTheme();

  useEffect(() => {
    const element = frame.current;
    const document = element?.contentDocument;
    if (!loaded || !element || !document) return;

    const styles = getComputedStyle(element);
    const root = document.documentElement;
    root.style.setProperty('--sans', styles.fontFamily);
    root.style.setProperty('--bg', styles.getPropertyValue('--bgColor-default'));
    root.style.setProperty('--ink', styles.getPropertyValue('--fgColor-default'));
    root.style.setProperty('--muted', styles.getPropertyValue('--fgColor-muted'));
    root.style.setProperty('--rule', styles.getPropertyValue('--borderColor-default'));
    root.dataset.theme = resolvedColorMode ?? 'light';
    document.body.style.padding = '24px';
    document.body.style.fontSize = '16px';
    const backLink = document.querySelector<HTMLElement>('.back-link');
    if (backLink) backLink.style.display = 'none';

    // Keep the original chart scripts isolated, but let the page scroll as one document.
    const resize = new ResizeObserver(() => {
      element.style.height = `${Math.ceil(document.body.getBoundingClientRect().height)}px`;
    });
    resize.observe(document.body);
    return () => resize.disconnect();
  }, [loaded, resolvedColorMode]);

  return <iframe ref={frame} className="article-frame" src="/docs/kalshi/article" title="Kalshi trading system write-up" onLoad={() => setLoaded(true)} />;
}
