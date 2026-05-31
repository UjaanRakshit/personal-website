'use client';

import { useEffect, useRef, useState } from 'react';
import type { Section } from '@/lib/sections';
import Rings from './Rings';
import SideTabs from './SideTabs';

type Props = {
  activeSection: Section;
  content: Record<Section, () => React.JSX.Element>;
};

const FLIP_HALF = 240;

export default function DeskBinder({ activeSection, content }: Props) {
  const [displayed, setDisplayed] = useState<Section>(activeSection);
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle');
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (activeSection === displayed) return;

    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayed(activeSection);
      setPhase('idle');
      return;
    }

    setPhase('out');

    const t1 = setTimeout(() => {
      setDisplayed(activeSection);
      setPhase('in');
    }, FLIP_HALF);

    const t2 = setTimeout(() => {
      setPhase('idle');
    }, FLIP_HALF * 2);

    timersRef.current = [t1, t2];

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [activeSection, displayed]);

  const Content = content[displayed];

  return (
    <div className="desk-stage">
      <div className="binder">
        <div aria-hidden className="binder-cover" />
        <Rings />
        <div className="binder-page-wrap">
          <div
            className="binder-page"
            data-phase={phase}
            role="tabpanel"
            aria-label={`${displayed} section`}
          >
            <div className="page-front-inner" key={displayed}>
              <Content />
            </div>
          </div>
        </div>
        <SideTabs activeSection={activeSection} />
      </div>
    </div>
  );
}
