import type { ReactNode } from 'react';

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
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
        <p style={{ color: 'rgba(28,20,16,0.78)' }}>
          cs at <ExtLink href="https://www.gatech.edu/">georgia tech</ExtLink>. some
          trading on the side.
        </p>
      </section>

      <Section
        title="currently"
        items={[
          <>
            making gpus go faster at{' '}
            <ExtLink href="https://cos.gatech.edu/arcs">
              academic &amp; research computing services
            </ExtLink>
          </>,
          <>
            wrangling robots and ml at{' '}
            <ExtLink href="https://www.pair.toronto.edu/">pair lab</ExtLink>
          </>,
        ]}
      />

      <Section
        title="recently built"
        items={[
          <>
            made{' '}
            <ExtLink href="https://github.com/ujaanrakshit/acheron">a way</ExtLink>{' '}
            to see your market fills in real time
          </>,
          <>
            made{' '}
            <ExtLink href="https://github.com/ujaanrakshit/photoscope">
              a better way
            </ExtLink>{' '}
            to get your photos organized
          </>,
          <>
            wanted to learn how to{' '}
            <ExtLink href="https://github.com/ujaanrakshit/taskweave">
              distribute systems
            </ExtLink>
          </>,
        ]}
      />

      <Section
        title="awards"
        items={[
          <>
            19th in the world in imc&apos;s{' '}
            <ExtLink href="https://prosperity.imc.com/">prosperity 4</ExtLink>
          </>,
          <>
            honorable mention at{' '}
            <ExtLink href="https://ioling.org/2023/">iol 2023</ExtLink>
          </>,
        ]}
      />
    </div>
  );
}
