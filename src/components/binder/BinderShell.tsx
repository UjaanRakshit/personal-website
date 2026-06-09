'use client';

import { usePathname } from 'next/navigation';
import { sectionFromPath, type Section } from '@/lib/sections';
import About from '@/content/About';
import Projects from '@/content/Projects';
import Contact from '@/content/Contact';
import DeskBinder from './DeskBinder';
import MobileBinder from './MobileBinder';

const CONTENT: Record<Section, () => React.JSX.Element> = {
  about: About,
  projects: Projects,
  contact: Contact,
};

export default function BinderShell() {
  const pathname = usePathname();
  const activeSection = sectionFromPath(pathname);

  // Both layouts render and CSS picks one, so the server-rendered HTML is
  // already correct for the viewport. The old useMediaQuery approach painted
  // the mobile card first on desktop, then swapped to the binder after
  // hydration.
  return (
    <>
      <div className="hidden min-[900px]:block">
        <DeskBinder activeSection={activeSection} content={CONTENT} />
      </div>
      <div className="min-[900px]:hidden">
        <MobileBinder activeSection={activeSection} content={CONTENT} />
      </div>
    </>
  );
}
