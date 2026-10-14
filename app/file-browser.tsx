'use client';

import {useEffect, useState, type ReactNode} from 'react';
import {ChevronDownIcon, FileIcon, FileDirectoryIcon} from '@primer/octicons-react';

type PortfolioFile = {id: string; path: string; preview: ReactNode};

export function FileBrowser({files}: {files: PortfolioFile[]}) {
  const [selected, setSelected] = useState(files[0].id);
  const folders = [...new Set(files.map(file => file.path.includes('/') ? file.path.split('/')[0] : ''))];

  useEffect(() => {
    function followHash() {
      const id = window.location.hash.slice(1);
      const file = document.getElementById(id);
      if (file instanceof HTMLDetailsElement) {
        file.open = true;
        setSelected(id);
      }
    }
    followHash();
    window.addEventListener('hashchange', followHash);
    return () => window.removeEventListener('hashchange', followHash);
  }, []);

  return <section aria-label="Project files">
    <div className="files-heading">
      <h2>{files.length} changed files</h2>
    </div>
    <div className="files-layout">
      <nav className="file-tree" aria-label="File tree">
        {folders.map(folder => <div className="tree-group" key={folder}>
          {folder && <div className="tree-folder"><FileDirectoryIcon /><strong>{folder}</strong></div>}
          {files.filter(file => (file.path.includes('/') ? file.path.split('/')[0] : '') === folder).map(file => (
            <a key={file.id} className={folder ? 'tree-file nested' : 'tree-file'}
              href={`#${file.id}`} aria-current={selected === file.id ? 'location' : undefined}
              onClick={() => {
                const target = document.getElementById(file.id) as HTMLDetailsElement;
                target.open = true;
                setSelected(file.id);
                target.querySelector('summary')?.focus({preventScroll: true});
              }}>
              <FileIcon /><span>{file.path.split('/').at(-1)}</span>
            </a>
          ))}
        </div>)}
      </nav>
      <div className="file-list">
        {files.map(file => <details className="file-box" id={file.id} key={file.id} open>
          <summary><ChevronDownIcon /><FileIcon /><strong>{file.path}</strong></summary>
          {file.preview}
        </details>)}
      </div>
    </div>
  </section>;
}
