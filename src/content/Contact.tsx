export default function Contact() {
  return (
    <div className="text-foreground">
      <section className="mb-6">
        <h1 className="text-2xl font-normal tracking-tight mb-2">say hi.</h1>
        <p className="text-[15px] leading-snug text-foreground/80">
          easiest way to reach me is email. i answer most of them within a day.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xs uppercase tracking-widest text-foreground/60 mb-2">
          channels
        </h2>
        <ul className="space-y-1 text-[15px] leading-snug">
          <li className="flex items-start gap-2">
            <span className="text-foreground/50 select-none mt-[2px]">↳</span>
            <span>
              email me at{' '}
              <span className="font-mono">rakshitujaan[at]gmail[dot]com</span>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground/50 select-none mt-[2px]">↳</span>
            <span>
              find me on{' '}
              <a
                href="https://linkedin.com/in/ujaan-rakshit"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/40 underline-offset-[3px] hover:decoration-foreground"
              >
                linkedin
              </a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground/50 select-none mt-[2px]">↳</span>
            <span>
              browse my code on{' '}
              <a
                href="https://github.com/ujaanrakshit"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/40 underline-offset-[3px] hover:decoration-foreground"
              >
                github
              </a>
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-widest text-foreground/60 mb-2">
          good things to email me about
        </h2>
        <ul className="space-y-1 text-[15px] leading-snug">
          <li className="flex items-start gap-2">
            <span className="text-foreground/50 select-none mt-[2px]">↳</span>
            <span>internships and roles for summer 2026 and beyond</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground/50 select-none mt-[2px]">↳</span>
            <span>low-latency systems, ml infra, trading projects</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground/50 select-none mt-[2px]">↳</span>
            <span>anything you want a second pair of eyes on</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
