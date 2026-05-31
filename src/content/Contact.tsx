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
        <p style={{ color: 'rgba(28,20,16,0.78)' }}>
          easiest way to reach me is email. i answer most of them within a day.
        </p>
      </section>

      <section>
        <h2>channels</h2>
        <ul>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>
              email me at{' '}
              <span className="font-mono text-[15px]">rakshitujaan[at]gmail[dot]com</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>
              find me on <ExtLink href="https://linkedin.com/in/ujaan-rakshit">linkedin</ExtLink>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>
              browse my code on{' '}
              <ExtLink href="https://github.com/ujaanrakshit">github</ExtLink>
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2>good things to email me about</h2>
        <ul>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>internships and roles for summer 2026 and beyond</span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>low-latency systems, ml infra, trading projects</span>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>anything you want a second pair of eyes on</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
