'use client';

import type { BinderProps } from './types';
import PageArea from './PageArea';
import SideTabs from './SideTabs';
import Cover from './Cover';
import Rings from './Rings';

export default function DeskBinder(props: BinderProps) {
  return (
    <div className="desk-stage h-screen overflow-hidden flex justify-center">
      <div
        className="binder relative"
        style={{ width: 'min(880px, 95vw)', height: 'calc(100vh + 220px)', marginTop: 36 }}
      >
        <Cover />
        <Rings />
        <div className="relative h-full">
          <PageArea {...props} variant="desktop" />
          <SideTabs activeSection={props.activeSection} />
        </div>
      </div>
    </div>
  );
}
