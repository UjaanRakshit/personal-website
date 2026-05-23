'use client';

import type { BinderProps } from './types';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

type Props = BinderProps & { variant: 'desktop' | 'mobile' };

export default function PageArea({ activeSection, query, setQuery, children, variant }: Props) {
  const hasQuery = query.trim().length > 0;
  return (
    <div
      role="tabpanel"
      aria-label={hasQuery ? 'search results' : `${activeSection} section`}
      className={
        variant === 'desktop'
          ? 'paper-page paper-page--desk'
          : 'paper-page paper-page--mobile'
      }
    >
      <div className="paper-page__inner">
        <SearchBox value={query} onChange={setQuery} />
        {hasQuery ? <SearchResults query={query} /> : children}
      </div>
    </div>
  );
}
