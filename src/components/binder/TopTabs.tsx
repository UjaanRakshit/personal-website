'use client';

import TransitionLink from '@/components/TransitionLink';
import { useRef, type KeyboardEvent } from 'react';
import { SECTIONS, type Section } from '@/lib/sections';

export default function TopTabs({ activeSection }: { activeSection: Section }) {
  const tablistRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const buttons = Array.from(
      tablistRef.current?.querySelectorAll<HTMLAnchorElement>('[role="tab"]') ?? [],
    );
    const idx = buttons.findIndex((b) => b === document.activeElement);
    if (idx === -1) return;
    e.preventDefault();
    const next = e.key === 'ArrowRight'
      ? (idx + 1) % buttons.length
      : (idx - 1 + buttons.length) % buttons.length;
    buttons[next]?.focus();
  };

  return (
    <header className="sticky top-0 z-30 binder-spine">
      <div className="px-5 pt-3 pb-1 flex items-baseline justify-between">
        <span className="text-sm font-medium tracking-tight text-[#f6f1e7]">
          ujaan rakshit
        </span>
      </div>
      <div
        role="tablist"
        aria-orientation="horizontal"
        ref={tablistRef}
        onKeyDown={onKeyDown}
        className="px-5 pb-2 flex gap-5 text-sm"
      >
        {SECTIONS.map((s) => {
          const active = s.id === activeSection;
          return (
            <TransitionLink
              key={s.id}
              href={s.href}
              role="tab"
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              className="binder-top-tab"
              data-active={active}
              style={{ '--accent': s.color } as React.CSSProperties}
            >
              {s.label}
            </TransitionLink>
          );
        })}
      </div>
    </header>
  );
}
