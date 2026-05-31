import type { ReactNode } from 'react';

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-current/30 underline-offset-[4px] hover:decoration-current transition-colors"
      style={{ color: 'inherit' }}
    >
      {children}
    </a>
  );
}

export default function Contact() {
  return (
    <div>
      <section>
        <h1>say hi.</h1>
        <p
          className="italic"
          style={{ color: 'rgba(80, 55, 30, 0.78)', fontFamily: 'var(--serif)', fontSize: '17px' }}
        >
          email is the fastest. i usually reply within a day.
        </p>
      </section>

      <section>
        <h2>channels</h2>
        <ul>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>
              email{' '}
              <span className="font-mono text-[15px]">rakshitujaan[at]gmail[dot]com</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>
              connect on <ExtLink href="https://linkedin.com/in/ujaan-rakshit">linkedin</ExtLink>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>
              read code on{' '}
              <ExtLink href="https://github.com/ujaanrakshit">github</ExtLink>
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2>worth reaching out about</h2>
        <ul>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>internship and full-time roles for summer 2026 and beyond</span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>collaborations on low-latency systems, ml infrastructure, or research</span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>anything you&apos;d like a second pair of eyes on</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
