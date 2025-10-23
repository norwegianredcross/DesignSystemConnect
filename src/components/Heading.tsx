import React from 'react';
import { Heading } from 'rk-designsystem';

// --- Sizes Example ---
export const HeadingSizesExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Heading data-size="xs">Ekstra Liten Overskrift (xs)</Heading>
      <Heading data-size="sm">Liten Overskrift (sm)</Heading>
      <Heading data-size="md">Medium Overskrift (md)</Heading>
      <Heading data-size="lg">Stor Overskrift (lg)</Heading>
      <Heading data-size="xl">Ekstra Stor Overskrift (xl)</Heading>
    </div>
  );
};

