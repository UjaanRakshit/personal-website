'use client';

import { useEffect, useRef, useState } from 'react';
import { SECTIONS, type Section } from '@/lib/sections';
import Rings from './Rings';
import SideTabs from './SideTabs';

type Props = {
  activeSection: Section;
  content: Record<Section, () => React.JSX.Element>;
};

const FLIP_HALF = 450;

export default function DeskBinder({ activeSection, content }: Props) {
  const activeIdx = SECTIONS.findIndex((s) => s.id === activeSection);
  const [shown, setShown] = useState<Section>(activeSection);
  const [forwardIncoming, setForwardIncoming] = useState<Section | null>(null);
  const swapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const endTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (activeSection === shown) return;
    if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
    if (endTimerRef.current) clearTimeout(endTimerRef.current);

    const oldIdx = SECTIONS.findIndex((s) => s.id === shown);
    const newIdx = SECTIONS.findIndex((s) => s.id === activeSection);
    const isForward = newIdx > oldIdx;

    setForwardIncoming(isForward ? activeSection : null);

    swapTimerRef.current = setTimeout(() => {
      setShown(activeSection);
      swapTimerRef.current = null;
    }, FLIP_HALF);

    endTimerRef.current = setTimeout(() => {
      setForwardIncoming(null);
      endTimerRef.current = null;
    }, FLIP_HALF * 2);

    return () => {
      if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
      if (endTimerRef.current) clearTimeout(endTimerRef.current);
    };
  }, [activeSection, shown]);

  return (
    <div className="desk-stage h-screen overflow-hidden flex justify-end pt-6">
      <div
        className="binder"
        style={{
          width: 2200,
          height: 'calc(100vh + 220px)',
          flexShrink: 0,
          marginRight: 'max(0px, calc(50vw - 530px))',
        }}
      >
        <div aria-hidden className="binder-cover" />
        <Rings />
        <div className="pages-stack" role="tabpanel">
          {SECTIONS.map((s, i) => {
            const delta = i - activeIdx;
            const Content = content[s.id];
            const flipped = delta < 0;
            return (
              <div
                key={s.id}
                className="page"
                aria-hidden={delta !== 0}
                data-state={delta === 0 ? 'front' : flipped ? 'flipped' : 'underneath'}
                data-phase={s.id === forwardIncoming ? 'forward-incoming' : 'idle'}
                style={{
                  transform: flipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                  zIndex: 100 - Math.abs(delta),
                }}
              >
                <div className="page-face page-front">
                  {s.id === shown && (
                    <div className="page-front-inner" key={`shown-${shown}`}>
                      <Content />
                    </div>
                  )}
                </div>
                <div aria-hidden className="page-face page-back" />
              </div>
            );
          })}
        </div>
        <SideTabs activeSection={activeSection} />
      </div>
    </div>
  );
}
