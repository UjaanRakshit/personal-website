'use client';

import { useMemo } from 'react';
import { searchIndex } from '@/lib/searchIndex';
import { SECTIONS } from '@/lib/sections';

export default function SearchResults({ query }: { query: string }) {
  const hits = useMemo(() => searchIndex(query), [query]);
  return (
    <section className="search-results">
      <h2 className="results-heading">results for &ldquo;{query}&rdquo;</h2>
      {hits.length === 0 ? (
        <p className="results-empty">nothing matched. try a different word.</p>
      ) : (
        <ul className="results-list">
          {hits.map((hit, i) => {
            const sec = SECTIONS.find((s) => s.id === hit.section);
            const external = hit.href.startsWith('http');
            return (
              <li key={i} className="result-row">
                <a
                  href={hit.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="result-link"
                >
                  <span
                    className="result-chip"
                    style={{ background: sec?.color, color: sec?.ink }}
                  >
                    {hit.section}
                  </span>
                  <span className="result-text">
                    <span className="result-title">{hit.title}</span>
                    <span className="result-snippet">{hit.snippet}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
