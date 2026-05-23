'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ComponentProps, MouseEvent } from 'react';

type Props = ComponentProps<typeof Link>;

type DocumentWithVT = Document & {
  startViewTransition?: (cb: () => void) => unknown;
};

export default function TransitionLink({ href, onClick, ...rest }: Props) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (e.button !== 0) return;
    if (typeof href !== 'string') return;

    const doc = document as DocumentWithVT;
    if (typeof doc.startViewTransition !== 'function') return;

    e.preventDefault();
    doc.startViewTransition(() => {
      router.push(href);
    });
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
