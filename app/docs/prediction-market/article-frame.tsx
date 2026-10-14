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

    const root = document.documentElement;
    root.dataset.theme = resolvedColorMode ?? 'light';
    const backLink = document.querySelector<HTMLElement>('.back-link');
    if (backLink) backLink.style.display = 'none';

    // Keep the original chart scripts isolated, but let the page scroll as one document.
    const resize = new ResizeObserver(() => {
      element.style.height = `${Math.ceil(document.body.getBoundingClientRect().height)}px`;
    });
    resize.observe(document.body);
    return () => resize.disconnect();
  }, [loaded, resolvedColorMode]);

  return <iframe ref={frame} className="article-frame" src="/docs/prediction-market/article" title="Prediction Market Inefficiency Research write-up" onLoad={() => setLoaded(true)} />;
}
