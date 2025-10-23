import React, { useState } from 'react';
import {
  Suggestion,
  type SuggestionOptionProps,
} from 'rk-designsystem';

// Define a type for the items.
// We're importing SuggestionOptionProps to make a compatible type.
type SuggestionItem = Pick<SuggestionOptionProps, 'label' | 'value'>;

const defaultOptions: SuggestionItem[] = [
  { label: 'Sogndal', value: 'sogndal' },
  { label: 'Oslo', value: 'oslo' },
  { label: 'Bergen', value: 'bergen' },
  { label: 'Trondheim', value: 'trondheim' },
  { label: 'Stavanger', value: 'stavanger' },
];

// --- Default (Single Select) Example ---
export const SuggestionDefaultExample = () => {
  const [selected, setSelected] = useState<SuggestionItem | undefined>(undefined);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label htmlFor="suggestion-single">Velg en destinasjon</label>
      <Suggestion
        id="suggestion-single"
        selected={selected as any} // Cast to any to bypass potential type issues
        onSelectedChange={(item: unknown) => {
          if (!Array.isArray(item)) {
            setSelected(item as SuggestionItem);
          }
        }}
        name="single-destination"
      >
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {defaultOptions.map((opt) => (
            <Suggestion.Option
              key={opt.value}
              label={opt.label}
              value={opt.value}
            >
              {opt.label}
            </Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </div>
  );
};

// --- Multi-Select Example ---
export const SuggestionMultiSelectExample = () => {
  const [selected, setSelected] = useState<SuggestionItem[]>([
    defaultOptions[1], // Pre-select 'Oslo'
  ]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label htmlFor="suggestion-multi">Velg destinasjoner</label>
      <Suggestion
        id="suggestion-multi"
        multiple={true}
        selected={selected as any} // Cast to any to bypass potential type issues
        onSelectedChange={(items: unknown) => {
          if (Array.isArray(items)) {
            setSelected(items as SuggestionItem[]);
          }
        }}
        name="multi-destination"
      >
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {defaultOptions.map((opt) => (
            <Suggestion.Option
              key={opt.value}
              label={opt.label}
              value={opt.value}
            >
              {opt.label}
            </Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </div>
  );
};


