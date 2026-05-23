'use client';

import TransitionLink from '@/components/TransitionLink';
import { useRef, type KeyboardEvent } from 'react';
import { SECTIONS, type Section } from '@/lib/sections';

export default function SideTabs({ activeSection }: { activeSection: Section }) {
  const tablistRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const buttons = Array.from(
      tablistRef.current?.querySelectorAll<HTMLAnchorElement>('[role="tab"]') ?? [],
    );
    const idx = buttons.findIndex((b) => b === document.activeElement);
    if (idx === -1) return;
    e.preventDefault();
    const next = e.key === 'ArrowDown'
      ? (idx + 1) % buttons.length
      : (idx - 1 + buttons.length) % buttons.length;
    buttons[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-orientation="vertical"
      ref={tablistRef}
      onKeyDown={onKeyDown}
      className="binder-tabs"
    >
      {SECTIONS.map((s, i) => {
        const active = s.id === activeSection;
        return (
          <TransitionLink
            key={s.id}
            href={s.href}
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            className="binder-tab"
            data-active={active}
            style={{
              top: `${72 + i * 128}px`,
              background: s.color,
              color: s.ink,
            }}
          >
            {s.label}
          </TransitionLink>
        );
      })}
    </div>
  );
}
