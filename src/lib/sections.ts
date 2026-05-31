export type Section = 'about' | 'projects' | 'contact';

export const SECTIONS: { id: Section; label: string; href: string; color: string; ink: string }[] = [
  { id: 'about', label: 'about', href: '/', color: '#d9b885', ink: '#4a3318' },
  { id: 'projects', label: 'projects', href: '/projects', color: '#b8a3c9', ink: '#3a2a55' },
  { id: 'contact', label: 'contact', href: '/contact', color: '#a3bdc9', ink: '#2a3f55' },
];

export function sectionFromPath(pathname: string): Section {
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/contact')) return 'contact';
  return 'about';
}
