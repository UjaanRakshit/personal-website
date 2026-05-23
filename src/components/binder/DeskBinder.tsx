'use client';

import type { BinderProps } from './types';
import PageArea from './PageArea';
import SideTabs from './SideTabs';
import Rings from './Rings';

export default function DeskBinder(props: BinderProps) {
  return (
    <div className="desk-stage h-screen overflow-hidden flex justify-center pt-6">
      <div
        className="open-book"
        style={{
          width: 'min(1120px, 96vw)',
          height: 'calc(100vh + 220px)',
        }}
      >
        <div aria-hidden className="leather-cover" />
        <Rings />
        <PageArea {...props} variant="desktop" />
        <SideTabs activeSection={props.activeSection} />
      </div>
    </div>
  );
}
