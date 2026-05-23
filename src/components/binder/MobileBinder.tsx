'use client';

import type { BinderProps } from './types';
import PageArea from './PageArea';
import TopTabs from './TopTabs';

export default function MobileBinder(props: BinderProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopTabs activeSection={props.activeSection} />
      <PageArea {...props} variant="mobile" />
    </div>
  );
}
