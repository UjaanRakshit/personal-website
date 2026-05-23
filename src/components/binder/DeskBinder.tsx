'use client';

import type { BinderProps } from './types';
import PageArea from './PageArea';
import SideTabs from './SideTabs';
import Cover from './Cover';
import Rings from './Rings';

export default function DeskBinder(props: BinderProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-12">
      <div className="binder relative" style={{ width: 880, maxWidth: '95vw' }}>
        <Cover />
        <Rings />
        <div className="relative">
          <PageArea {...props} variant="desktop" />
          <SideTabs activeSection={props.activeSection} />
        </div>
      </div>
    </div>
  );
}
