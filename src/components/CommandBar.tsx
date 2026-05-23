'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

type Item = {
  label: string;
  altLabel?: string;
  hint?: string;
  shortcut?: string;
  group: 'pages' | 'links' | 'actions';
  keywords?: string;
  keepOpen?: boolean;
  run: () => void;
};

export default function CommandBar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const items = useMemo<Item[]>(() => {
    const go = (path: string) => () => router.push(path);
    const openUrl = (url: string) => () =>
      window.open(url, '_blank', 'noopener,noreferrer');
    return [
      { label: 'about', group: 'pages', hint: '⇧A', shortcut: 'a', run: go('/') },
      { label: 'projects', group: 'pages', hint: '⇧P', shortcut: 'p', run: go('/projects') },
      {
        label: 'email',
        altLabel: 'rakshitujaan[at]gmail[dot]com',
        group: 'links',
        hint: '⇧E',
        shortcut: 'e',
        keywords: 'mail contact',
        run: openUrl('mailto:rakshitujaan@gmail.com'),
      },
      { label: 'linkedin', group: 'links', hint: '⇧L', shortcut: 'l', run: openUrl('https://linkedin.com/in/ujaan-rakshit') },
      { label: 'github', group: 'links', hint: '⇧G', shortcut: 'g', run: openUrl('https://github.com/ujaanrakshit') },
      {
        label: 'toggle theme',
        group: 'actions',
        hint: '⇧T',
        shortcut: 't',
        keywords: 'dark light mode',
        keepOpen: true,
        run: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      },
    ];
  }, [router, setTheme, theme]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q || q === 'rgb') return items;
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) ||
        i.altLabel?.toLowerCase().includes(q) ||
        i.keywords?.toLowerCase().includes(q),
    );
  }, [query, items]);

  const grouped = useMemo(() => {
    const m = new Map<string, Item[]>();
    filtered.forEach((item) => {
      const list = m.get(item.group) ?? [];
      list.push(item);
      m.set(item.group, list);
    });
    return [...m.entries()];
  }, [filtered]);

  useEffect(() => {
    if (query.toLowerCase().trim() === 'rgb') {
      document.body.classList.toggle('rgb-mode');
      setQuery('');
      setOpen(false);
      inputRef.current?.blur();
    }
  }, [query]);

  useEffect(() => setActiveIdx(0), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const inField =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        (target as HTMLElement | null)?.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
        inputRef.current?.focus();
        return;
      }
      if (e.key === 'Escape') {
        if (open) {
          setOpen(false);
          inputRef.current?.blur();
        }
        return;
      }
      if (inField) return;

      if (e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const k = e.key.toLowerCase();
        const item = items.find((i) => i.shortcut === k);
        if (item) {
          e.preventDefault();
          item.run();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, items]);

  const activateItem = (item: Item) => {
    item.run();
    if (item.keepOpen) {
      inputRef.current?.focus();
    } else {
      setQuery('');
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = filtered[activeIdx];
      if (item) activateItem(item);
    }
  };

  if (!mounted) return null;

  const popupOpen = open && filtered.length > 0;

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 bottom-5 z-50 transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open
          ? 'w-[min(440px,calc(100vw-2rem))]'
          : 'w-[min(210px,calc(100vw-3rem))]'
      }`}
    >
      <div
        className={`absolute bottom-full mb-2 left-0 right-0 transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          popupOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <div className="bg-background border border-foreground/15 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] max-h-[60vh] overflow-y-auto">
          <div className="px-4 py-2 text-[10px] tracking-wide text-muted border-b border-foreground/10">
            hold <kbd className="px-1 py-0.5 text-[10px] text-foreground/80 bg-foreground/[0.06] border border-foreground/15 rounded font-mono">shift</kbd> + a letter anywhere on the page
          </div>
          {grouped.map(([group, gItems]) => (
            <div key={group} className="py-1">
              <div className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-widest text-muted">
                {group}
              </div>
              {gItems.map((item) => {
                const flatIdx = filtered.indexOf(item);
                const active = flatIdx === activeIdx;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onMouseEnter={() => setActiveIdx(flatIdx)}
                    onClick={() => activateItem(item)}
                    className={`w-full text-left px-4 py-1.5 text-sm flex items-center justify-between transition-colors ${
                      active
                        ? 'bg-foreground/[0.05] text-foreground'
                        : 'text-foreground/75 hover:bg-foreground/[0.03]'
                    }`}
                  >
                    {item.altLabel ? (
                      <span className="relative inline-block overflow-hidden whitespace-nowrap min-w-0 flex-1">
                        <span
                          className={`block transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            active
                              ? 'opacity-0 -translate-y-1'
                              : 'opacity-100 translate-y-0'
                          }`}
                        >
                          {item.label}
                        </span>
                        <span
                          aria-hidden={!active}
                          className={`absolute left-0 top-0 block transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            active
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-1'
                          }`}
                        >
                          {item.altLabel}
                        </span>
                      </span>
                    ) : (
                      <span className="truncate">{item.label}</span>
                    )}
                    {item.hint && (
                      <kbd className="ml-2 px-1.5 py-0.5 text-[11px] leading-none text-foreground/80 bg-foreground/[0.08] border border-foreground/15 rounded-md font-mono whitespace-nowrap">
                        {item.hint}
                      </kbd>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-40 hover:opacity-100 focus-within:opacity-100'
        }`}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={onInputKey}
          placeholder={open ? 'search · ⌘k · ⇧+letter' : '⌘k · ⇧+letter'}
          aria-label="command bar"
          spellCheck={false}
          className="w-full bg-background border border-foreground/15 rounded-full px-5 py-2 text-sm text-foreground placeholder:text-muted focus:border-foreground/35 focus:outline-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors"
        />
      </div>
    </div>
  );
}
