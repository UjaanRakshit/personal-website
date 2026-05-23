'use client';

import { SECTIONS, type Section } from '@/lib/sections';
import Rings from './Rings';
import SideTabs from './SideTabs';

type Props = {
  activeSection: Section;
  content: Record<Section, () => React.JSX.Element>;
};

export default function DeskBinder({ activeSection, content }: Props) {
  const activeIdx = SECTIONS.findIndex((s) => s.id === activeSection);

  return (
    <div className="desk-stage h-screen overflow-hidden flex justify-center pt-6">
      <div
        className="binder"
        style={{
          width: 'min(1600px, 96vw)',
          height: 'calc(100vh + 220px)',
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
                style={{
                  transform: flipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                  zIndex: 100 - Math.abs(delta),
                  opacity: delta > 0 ? 0 : 1,
                }}
              >
                <div className="page-face page-front">
                  <div className="page-front-inner">
                    <Content />
                  </div>
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
