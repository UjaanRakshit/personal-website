'use client';

import type { BinderProps } from './types';
import PageArea from './PageArea';
import SideTabs from './SideTabs';
import Cover from './Cover';
import Rings from './Rings';

export default function DeskBinder(props: BinderProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="binder relative" style={{ width: 880, maxWidth: '95vw' }}>
        <Cover />
        <Rings />
        <PageArea {...props} variant="desktop" />
        <SideTabs activeSection={props.activeSection} />
      </div>
    </div>
  );
}
