export type Section = 'about' | 'projects' | 'contact';

export const SECTIONS: { id: Section; label: string; href: string; color: string; ink: string }[] = [
  { id: 'about', label: 'about', href: '/', color: '#e8c9a0', ink: '#5b4022' },
  { id: 'projects', label: 'projects', href: '/projects', color: '#c9a0e8', ink: '#3f1f6b' },
  { id: 'contact', label: 'contact', href: '/contact', color: '#a0c9e8', ink: '#1f3f6b' },
];

export function sectionFromPath(pathname: string): Section {
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/contact')) return 'contact';
  return 'about';
}
