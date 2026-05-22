'use client';

import Link from '@/components/TransitionLink';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Mail } from 'lucide-react';

const NAV = [
  { name: 'about', href: '/' },
  { name: 'projects', href: '/projects' },
];

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const SOCIALS = [
  { href: 'mailto:rakshitujaan@gmail.com', label: 'email', Icon: Mail },
  { href: 'https://linkedin.com/in/ujaan-rakshit', label: 'linkedin', Icon: LinkedinIcon },
  { href: 'https://github.com/ujaanrakshit', label: 'github', Icon: GithubIcon },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const isDark = mounted ? theme !== 'light' : false;

  return (
    <header className="flex items-baseline justify-between mb-12">
      <Link href="/" className="text-base tracking-tight hover:opacity-70">
        ujaan rakshit
      </Link>
      <nav className="flex items-center gap-4 text-sm text-muted">
        {NAV.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={
              isActive(item.href)
                ? 'text-foreground'
                : 'hover:text-foreground'
            }
          >
            {item.name}
          </Link>
        ))}
        <span aria-hidden className="text-muted/40 select-none">·</span>
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-foreground"
          >
            <Icon size={14} />
          </a>
        ))}
        <span aria-hidden className="text-muted/40 select-none">·</span>
        <button
          type="button"
          aria-label="toggle theme"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="hover:text-foreground"
          suppressHydrationWarning
        >
          {isDark ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
        </button>
      </nav>
    </header>
  );
}
