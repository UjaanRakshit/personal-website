'use client';

import { useRef } from 'react';

export default function SearchBox({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="search-row">
      <input
        ref={ref}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="search…"
        aria-label="search the binder"
        spellCheck={false}
        className="search-input"
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            onChange('');
            ref.current?.focus();
          }}
          className="search-clear"
          aria-label="clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
