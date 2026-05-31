type Project = {
  name: string;
  date: string;
  stack: string;
  short: string;
  long: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: 'Acheron',
    date: 'mar 2026',
    stack: 'C++20 · low-latency · market data',
    short: 'C++20 L3 market-data replay engine.',
    long:
      'Replays L3 market data into FIFO books while keeping order IDs and queue position intact. Each symbol replays in parallel, but each book has a single writer, so the hot path stays lock-free. Tested on AAPL and GOOG up to 8.69M events/sec.',
    href: 'https://github.com/ujaanrakshit/acheron',
  },
  {
    name: 'PhotoScope',
    date: 'feb 2026',
    stack: 'Python · CLIP · FAISS · FastAPI · Postgres',
    short: 'natural-language search over 50k personal photos.',
    long:
      'CLIP embeddings indexed in FAISS, served from FastAPI with metadata in Postgres. Clusters duplicates and trips so the timeline does not get noisy. Most queries return under 200ms.',
    href: 'https://github.com/ujaanrakshit/photoscope',
  },
  {
    name: 'TaskWeave',
    date: 'nov 2025',
    stack: 'Python · FastAPI · Postgres · Redis · WebSockets',
    short: 'distributed DAG orchestrator on Postgres and Redis.',
    long:
      'State lives in Postgres so workflows survive restarts. Dependency release is atomic, which stops two workers from picking up the same task. Status streams over WebSockets, and FastAPI endpoints handle retries, cancels, and audit logs.',
    href: 'https://github.com/ujaanrakshit/taskweave',
  },
  {
    name: 'JurassIQ',
    date: 'mar 2025',
    stack: 'Next.js · ONNX · CLIP · Python',
    short: 'computer vision model for identifying and valuing fossils.',
    long:
      'Hacklytics 2025 project. Trained on 100k synthetic and 5k real images. Around 99% accuracy on the held-out set.',
  },
  {
    name: 'What is the Title of this Paper?',
    date: 'jun 2023',
    stack: 'Python · logic · research',
    short: 'arXiv paper on automating Knights-and-Knaves logic puzzles.',
    long:
      '3rd place at the InnoSphere International Research and Tech Conference.',
    href: 'https://arxiv.org/abs/2309.13044',
  },
];

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

function ExternalIcon({ size = 14 }: { size?: number }) {
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
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function LinkIcon({ href, size = 14 }: { href: string; size?: number }) {
  return href.includes('github.com') ? <GithubIcon size={size} /> : <ExternalIcon size={size} />;
}

function ProjectRow({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3 className="inline-flex items-center gap-2">
          <span className="relative">
            {project.name}
            <span
              aria-hidden
              className="absolute left-0 -bottom-px h-px w-full bg-current origin-right transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-0"
            />
          </span>
          {project.href && (
            <span
              aria-hidden
              className="inline-flex opacity-0 scale-50 -translate-x-1 transition-all duration-300 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-70 group-hover:scale-100 group-hover:translate-x-0"
            >
              <LinkIcon href={project.href} size={14} />
            </span>
          )}
        </h3>
        <span
          className="text-[13px] italic whitespace-nowrap"
          style={{ color: 'rgba(80, 55, 30, 0.65)', fontFamily: 'var(--serif)' }}
        >
          {project.date}
        </span>
      </div>
      <p className="text-[11px] mb-2 font-mono" style={{ color: 'rgba(60,40,20,0.55)' }}>{project.stack}</p>
      <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(28,20,16,0.82)' }}>
        {project.short}
      </p>
      <div className="overflow-hidden max-h-0 group-hover:max-h-[400px] transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <p className="text-[14px] leading-relaxed pt-2" style={{ color: 'rgba(28,20,16,0.6)' }}>
          {project.long}
        </p>
      </div>
    </>
  );

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-5 border-b border-dashed last:border-0"
      style={{ borderColor: 'rgba(120, 90, 50, 0.18)' }}
    >
      {inner}
    </a>
  ) : (
    <div
      className="group block py-5 border-b border-dashed last:border-0"
      style={{ borderColor: 'rgba(120, 90, 50, 0.18)' }}
    >
      {inner}
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <section>
        <h1>projects.</h1>
        <p
          className="italic"
          style={{ color: 'rgba(80, 55, 30, 0.68)', fontFamily: 'var(--serif)' }}
        >
          a working catalogue. hover any entry for the full notes.
        </p>
      </section>
      <section>
        {PROJECTS.map((p) => (
          <ProjectRow key={p.name} project={p} />
        ))}
      </section>
    </div>
  );
}
