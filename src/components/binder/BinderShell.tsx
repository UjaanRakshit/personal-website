'use client';

import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@/lib/hooks';
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
  const isDesktop = useMediaQuery('(min-width: 900px)');

  return isDesktop ? (
    <DeskBinder activeSection={activeSection} content={CONTENT} />
  ) : (
    <MobileBinder activeSection={activeSection} content={CONTENT} />
  );
}
