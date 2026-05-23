import type { Section } from './sections';

export type SearchHit = {
  section: Section;
  title: string;
  snippet: string;
  href: string;
};

export const SEARCH_INDEX: SearchHit[] = [
  // about
  { section: 'about', title: 'georgia tech', snippet: 'cs at georgia tech', href: 'https://www.gatech.edu/' },
  { section: 'about', title: 'academic & research computing services', snippet: 'making gpus go faster', href: 'https://cos.gatech.edu/arcs' },
  { section: 'about', title: 'pair lab', snippet: 'wrangling robots and ml', href: 'https://www.pair.toronto.edu/' },
  { section: 'about', title: 'imc prosperity 4', snippet: '19th in the world out of 19,000 teams', href: 'https://prosperity.imc.com/' },
  { section: 'about', title: 'iol 2023', snippet: 'honorable mention, international linguistics olympiad', href: 'https://ioling.org/2023/' },
  // projects
  { section: 'projects', title: 'Acheron', snippet: 'C++20 L3 market-data replay engine, 8.69M events/sec', href: 'https://github.com/ujaanrakshit/acheron' },
  { section: 'projects', title: 'PhotoScope', snippet: 'natural-language search over 50k personal photos', href: 'https://github.com/ujaanrakshit/photoscope' },
  { section: 'projects', title: 'TaskWeave', snippet: 'distributed DAG orchestrator on Postgres and Redis', href: 'https://github.com/ujaanrakshit/taskweave' },
  { section: 'projects', title: 'JurassIQ', snippet: 'CV model that identifies and values fossils', href: '/projects' },
  { section: 'projects', title: 'What is the Title of this Paper?', snippet: 'arXiv paper on automating Knights-and-Knaves', href: 'https://arxiv.org/abs/2309.13044' },
];

export function searchIndex(query: string): SearchHit[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return SEARCH_INDEX.filter((hit) =>
    hit.title.toLowerCase().includes(q) ||
    hit.snippet.toLowerCase().includes(q) ||
    hit.section.toLowerCase().includes(q),
  );
}
