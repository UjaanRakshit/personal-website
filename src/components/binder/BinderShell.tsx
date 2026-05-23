'use client';

import { useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useMediaQuery, useReducedMotion } from '@/lib/hooks';
import { sectionFromPath } from '@/lib/sections';
import MobileBinder from './MobileBinder';
import DeskBinder from './DeskBinder';

export default function BinderShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const activeSection = sectionFromPath(pathname);
  const [query, setQuery] = useState('');
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const reducedMotion = useReducedMotion();

  const shared = {
    activeSection,
    query,
    setQuery,
    reducedMotion,
    children,
  };

  return isDesktop ? <DeskBinder {...shared} /> : <MobileBinder {...shared} />;
}
