import type { ReactNode } from 'react';
import type { Section } from '@/lib/sections';

export type BinderProps = {
  activeSection: Section;
  query: string;
  setQuery: (q: string) => void;
  reducedMotion: boolean;
  children: ReactNode;
};
