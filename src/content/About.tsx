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

function Section({ title, items }: { title: string; items: ReactNode[] }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span aria-hidden className="select-none mt-[6px] text-[12px] opacity-50">↳</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function About() {
  return (
    <div>
      <section>
        <h1>hi, i&apos;m ujaan.</h1>
        <p
          className="italic"
          style={{ color: 'rgba(80, 55, 30, 0.78)', fontFamily: 'var(--serif)', fontSize: '17px' }}
        >
          studying computer science at{' '}
          <ExtLink href="https://www.gatech.edu/">georgia tech</ExtLink>.
        </p>
      </section>

      <Section
        title="currently"
        items={[
          <>
            engineering gpu inference performance at{' '}
            <ExtLink href="https://cos.gatech.edu/arcs">
              academic &amp; research computing services
            </ExtLink>
          </>,
          <>
            building robotics and ml infrastructure at{' '}
            <ExtLink href="https://www.pair.toronto.edu/">pair lab</ExtLink>
          </>,
        ]}
      />

      <Section
        title="recently built"
        items={[
          <>
            <ExtLink href="https://github.com/UjaanRakshit/kharon">Kharon</ExtLink>
            , a GPT that trains, serves, and RL-tunes itself on hand-written kernels
          </>,
          <>
            <ExtLink href="https://github.com/UjaanRakshit/acheron">Acheron</ExtLink>
            , a real-time L3 market-data replay engine
          </>,
          <>
            <ExtLink href="https://github.com/UjaanRakshit/nyx">Nyx</ExtLink>
            , a tactics map where humans and an AI are the same kind of client
          </>,
        ]}
      />

      <Section
        title="awards"
        items={[
          <>
            19th globally, 7th in the USA at imc&apos;s{' '}
            <ExtLink href="https://prosperity.imc.com/">prosperity 4</ExtLink>
          </>,
          <>
            6th in the HRT and Partcl macro placement challenge
          </>,
          <>
            honorable mention at the{' '}
            <ExtLink href="https://ioling.org/2023/">
              international linguistics olympiad
            </ExtLink>
            , 2023
          </>,
        ]}
      />
    </div>
  );
}
