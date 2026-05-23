'use client';

import type { Section } from '@/lib/sections';
import TopTabs from './TopTabs';

type Props = {
  activeSection: Section;
  content: Record<Section, () => React.JSX.Element>;
};

export default function MobileBinder({ activeSection, content }: Props) {
  const Active = content[activeSection];
  return (
    <div className="min-h-screen flex flex-col">
      <TopTabs activeSection={activeSection} />
      <div className="paper-page paper-page--mobile" role="tabpanel">
        <div className="paper-page__inner page-fade" key={activeSection}>
          <Active />
        </div>
      </div>
    </div>
  );
}
