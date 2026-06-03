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
    name: 'Kharon',
    date: 'may 2026',
    stack: 'cuda · c · llm infra',
    short: 'A GPT that trains, serves, and RL-tunes itself on hand-written kernels.',
    long:
      'A from-scratch C and CUDA stack with no deep-learning framework underneath, only NCCL and cuBLAS. It trains a 1.2B-parameter model across eight GPUs with composed tensor, pipeline, and ZeRO-1 parallelism, serves it through a paged-KV inference engine, and closes the loop with a GRPO reinforcement-learning trainer. Every kernel is verified against PyTorch, bit-exact where it can be.',
    href: 'https://github.com/UjaanRakshit/kharon',
  },
  {
    name: 'JaneRT Placer',
    date: 'may 2026',
    stack: 'gpu · optimization · physical design',
    short: 'A GPU macro-placement engine that optimizes the real objective, not a proxy.',
    long:
      'Built for the HRT and Partcl macro placement challenge. A byte-exact GPU surrogate of the official scoring function, with Adam descent driven straight on it, eigenvector-deflation saddle escape, and a deliberately diversified multi-seed pool. The decisive idea was treating soft macros as discrete actors under multi-epoch coordinate descent. Finished 6th against named industry and academic teams.',
  },
  {
    name: 'IMC Prosperity 4',
    date: 'apr 2026',
    stack: 'python · algorithmic trading · market making',
    short: '19th of 18,000+ in a global algorithmic trading competition.',
    long:
      "JaneRT's full run through IMC Prosperity 4, a two-week contest spanning market making, options pricing, regime detection, and a 50-product final universe. The edge came from modeling the mechanism before trading it: a hard sum-to-50,000 invariant for fair-value arbitrage, an implied-vol surface solved per strike, and bot-trader behaviour reverse-engineered from order flow. Finished 19th globally, 7th in the USA.",
    href: 'https://github.com/UjaanRakshit/imc-prosperity-4',
  },
  {
    name: 'Acheron',
    date: 'mar 2026',
    stack: 'c++ · low-latency · market data',
    short: 'A real-time L3 market-data replay engine.',
    long:
      'Reconstructs FIFO order books from L3 market data while preserving order IDs and queue position. Symbol replay runs in parallel, but each book is owned by a single writer, keeping the hot path lock-free. Validated against AAPL and GOOG, where it also quantifies exactly where exact replay breaks down (the orders a top-of-book feed never declares) at sustained throughputs up to 8.69M events per second.',
    href: 'https://github.com/UjaanRakshit/acheron',
  },
  {
    name: 'Pyre',
    date: 'mar 2026',
    stack: 'cuda · c++ · quant finance',
    short: 'A GPU Monte Carlo engine for option risk, calibrated to live markets.',
    long:
      'Prices equity options and computes portfolio VaR under Black-Scholes and Heston dynamics on hand-written CUDA kernels, with every GPU result checked against an analytic, CPU, or FFT reference. Scrambled Sobol paths cut variance by up to six orders of magnitude, and a live calibration loop fits the Heston surface to real option chains. A 10K-position, 50-underlying VaR clears in ~106ms on a consumer RTX 4060.',
    href: 'https://github.com/UjaanRakshit/pyre',
  },
  {
    name: 'Lethe',
    date: 'feb 2026',
    stack: 'distributed systems · c++ · llm infra',
    short: 'A distributed KV cache that serves more than any single GPU can hold.',
    long:
      "Shards prefix-aware KV blocks across a three-node cluster, replicates them for single-failure tolerance, and tiers them across HBM, DRAM, and SSD, exposed to vLLM as an external cache layer. Where one node's prefix cache collapses past its memory budget, Lethe holds an 85 to 99% hit rate, survives node death with zero data loss, and verifies every hit token-for-token. gRPC by default, with a hand-written RDMA path on InfiniBand.",
    href: 'https://github.com/UjaanRakshit/lethe',
  },
  {
    name: 'Nyx',
    date: 'nov 2025',
    stack: 'typescript · go · crdt',
    short: 'A real-time tactics map where humans and an AI are the same kind of client.',
    long:
      "Every actor (a human's drag, an autonomous agent, an LLM proposal) perceives the world through one from-scratch line-of-sight engine and crosses one validation boundary before touching shared state, all over a hand-written CRDT with no library beneath it. An autonomous wraith hunts whatever it can see while you fight back, blind around corners. The CRDT converges byte-identically under chaos, and a Go relay stays pinned to the TypeScript core by a cross-language conformance suite.",
    href: 'https://github.com/UjaanRakshit/nyx',
  },
  {
    name: 'Erebus',
    date: 'oct 2025',
    stack: 'python · distributed systems · postgres',
    short: 'A durable, multi-tenant workflow engine built on Postgres alone.',
    long:
      'Runs workflows as DAGs of tasks where Postgres is both the source of truth and the work queue: atomic claims, leased execution, and a reaper that recovers any task a dead worker abandons. Durable timers let a run sleep for a day without holding a thread, and every state change streams live to the browser. Ships from one image to a live URL, green across 155 backend tests.',
    href: 'https://github.com/UjaanRakshit/erebus',
  },
  {
    name: 'JurassIQ',
    date: 'mar 2025',
    stack: 'next.js · onnx · clip · python',
    short: 'A computer-vision model for fossil identification and valuation.',
    long:
      'Built during Hacklytics 2025. Trained on a combined corpus of 100,000 synthetic and 5,000 authenticated fossil images, reaching roughly 99% accuracy on the held-out evaluation set.',
  },
  {
    name: 'What is the Title of this Paper?',
    date: 'jun 2023',
    stack: 'python · logic · research',
    short: 'An arXiv paper on automating Knights-and-Knaves logic puzzles.',
    long:
      'Awarded third place at the InnoSphere International Research and Technology Conference.',
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
    <div className="flex flex-col h-full">
      <section className="shrink-0 pb-6">
        <h1>projects.</h1>
        <p
          className="italic"
          style={{ color: 'rgba(80, 55, 30, 0.68)', fontFamily: 'var(--serif)' }}
        >
          selected work. hover any entry for the full notes.
        </p>
      </section>
      <section
        className="grow overflow-y-auto pr-3 -mr-3"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(140, 110, 70, 0.3) transparent' }}
      >
        {PROJECTS.map((p) => (
          <ProjectRow key={p.name} project={p} />
        ))}
      </section>
    </div>
  );
}
