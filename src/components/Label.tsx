import React from 'react';
import { Label } from 'rk-designsystem';

// --- Sizes Example ---
export const LabelSizesExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Label data-size="sm">Liten etikett (Small)</Label>
      <Label data-size="md">Medium etikett (Medium)</Label>
      <Label data-size="lg">Stor etikett (Large)</Label>
    </div>
  );
};
