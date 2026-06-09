'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SECTIONS, type Section } from '@/lib/sections';
import Rings from './Rings';
import SideTabs from './SideTabs';
import DeskClutter from './DeskClutter';
import DeskTabs from './DeskTabs';

type Props = {
  activeSection: Section;
  content: Record<Section, () => React.JSX.Element>;
};

const FOLIO: Record<Section, string> = {
  about: 'I',
  projects: 'II',
  contact: 'III',
};

// keep in sync with --flip-ms in globals.css
const FLIP_MS = 1000;

export default function DeskBinder({ activeSection, content }: Props) {
  const router = useRouter();
  const activeIdx = SECTIONS.findIndex((s) => s.id === activeSection);
  const [coverOpened, setCoverOpened] = useState(false);

  // which pages are mid-turn, so the lighting sweep only plays on a
  // sheet that is actually rotating, and so the z-order can stay
  // anchored to the page that is leaving for the whole turn
  const [prevIdx, setPrevIdx] = useState(activeIdx);
  const [turning, setTurning] = useState<{
    ids: Section[];
    dir: 'fwd' | 'back';
    prev: number;
  } | null>(null);

  // Derived during render — NOT in an effect. An effect flushes after the
  // first commit has already painted, which left a few frames where the
  // incoming page sat on top of the sheet that was still turning (a brief
  // flash of the new text). Setting state during render makes React
  // re-render before committing, so the very first painted frame of a
  // navigation already has the right stacking, and the shade sweep starts
  // in sync with the rotation.
  if (prevIdx !== activeIdx) {
    setPrevIdx(activeIdx);
    setTurning({
      ids: SECTIONS.filter(
        (_, i) => (i - prevIdx < 0) !== (i - activeIdx < 0),
      ).map((s) => s.id),
      dir: activeIdx > prevIdx ? 'fwd' : 'back',
      prev: prevIdx,
    });
  }

  useEffect(() => {
    if (!turning) return;
    const t = setTimeout(() => setTurning(null), FLIP_MS + 80);
    return () => clearTimeout(t);
  }, [turning]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => setCoverOpened(true), reduced ? 0 : 1900);
    return () => clearTimeout(t);
  }, []);

  // the routes are tiny, but prefetching keeps arrow-key flips instant
  useEffect(() => {
    SECTIONS.forEach((s) => router.prefetch(s.href));
  }, [router]);

  // arrow keys turn the pages, like leafing through the binder
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)
      ) {
        return;
      }
      const next = e.key === 'ArrowRight' ? activeIdx + 1 : activeIdx - 1;
      if (next < 0 || next >= SECTIONS.length) return;
      e.preventDefault();
      router.push(SECTIONS[next].href);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIdx, router]);

  return (
    <div className="desk-stage h-screen overflow-hidden flex justify-end pt-6">
      <div className="binder">
        <DeskClutter />
        <div aria-hidden className="binder-cover" />
        <div
          aria-hidden
          className="binder-front-cover"
          data-opened={coverOpened ? 'true' : 'false'}
        />
        <Rings />
        <div className="pages-stack" role="tabpanel">
          {SECTIONS.map((s, i) => {
            const delta = i - activeIdx;
            const Content = content[s.id];
            const flipped = delta < 0;
            const isFront = delta === 0;
            const turn = turning && turning.ids.includes(s.id) ? turning.dir : undefined;
            // While turning forward, keep z-order anchored to the page that
            // is leaving so it stays on top of the sheet it reveals; turning
            // back, the incoming page takes the top slot immediately (while
            // it is still flat on the left, where nothing overlaps). This is
            // only a fallback — real stacking comes from each sheet's
            // translateZ offset.
            const zAnchor = turning && turning.dir === 'fwd' ? turning.prev : activeIdx;
            return (
              <div
                key={s.id}
                className="page"
                aria-hidden={!isFront}
                inert={!isFront}
                data-state={isFront ? 'front' : flipped ? 'flipped' : 'underneath'}
                data-turning={turn}
                style={
                  {
                    zIndex: 100 - Math.abs(i - zAnchor),
                    '--page-z': `${SECTIONS.length - 1 - i}px`,
                  } as React.CSSProperties
                }
              >
                {/* Each page permanently owns its content. The text rides the
                    page through the flip instead of swapping mid-rotation, so
                    nothing pops in or vanishes. backface-visibility keeps
                    readable mirrored text impossible. */}
                <div className="page-face page-front">
                  <div className="page-front-inner" data-folio={FOLIO[s.id]}>
                    <Content />
                  </div>
                  <div aria-hidden className="page-shade" />
                </div>
                <div aria-hidden className="page-face page-back">
                  {/* faint mirrored show-through of this sheet's own ink, so
                      the back of a turning page reads as paper, not a blank
                      card */}
                  <div className="page-bleed" inert>
                    <div className="page-front-inner" data-folio={FOLIO[s.id]}>
                      <Content />
                    </div>
                  </div>
                  <div className="page-shade" />
                </div>
              </div>
            );
          })}
        </div>
        <SideTabs activeSection={activeSection} />
        <DeskTabs />
      </div>
      <p aria-hidden className="desk-hint">
        ← → turn the pages
      </p>
    </div>
  );
}
