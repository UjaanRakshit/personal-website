'use client';

import { useEffect, useRef, useState } from 'react';
import type { Section } from '@/lib/sections';
import TopTabs from './TopTabs';

type Props = {
  activeSection: Section;
  content: Record<Section, () => React.JSX.Element>;
};

// keep in sync with the page-fade-out duration in globals.css
const SWAP_MS = 260;

export default function MobileBinder({ activeSection, content }: Props) {
  const Active = content[activeSection];

  // hold the previous section briefly so it can fade out in place
  // instead of vanishing in a single frame
  const lastRef = useRef(activeSection);
  const [leaving, setLeaving] = useState<Section | null>(null);

  useEffect(() => {
    if (lastRef.current === activeSection) return;
    setLeaving(lastRef.current);
    lastRef.current = activeSection;
    const t = setTimeout(() => setLeaving(null), SWAP_MS);
    return () => clearTimeout(t);
  }, [activeSection]);

  const Leaving = leaving ? content[leaving] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <TopTabs activeSection={activeSection} />
      <div className="paper-page paper-page--mobile" role="tabpanel">
        <div className="mobile-swap">
          {Leaving && leaving && (
            <div
              key={leaving}
              aria-hidden
              inert
              className="paper-page__inner page-fade-out"
            >
              <Leaving />
            </div>
          )}
          <div key={activeSection} className="paper-page__inner page-fade">
            <Active />
          </div>
        </div>
      </div>
    </div>
  );
}
