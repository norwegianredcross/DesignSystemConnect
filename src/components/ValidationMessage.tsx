import React from 'react';
import { ValidationMessage } from 'rk-designsystem';

// --- Sizes Example ---
export const ValidationMessageSizesExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <ValidationMessage data-size="sm">
        Liten valideringsmelding.
      </ValidationMessage>
      <ValidationMessage data-size="md">
        Medium valideringsmelding.
      </ValidationMessage>
      <ValidationMessage data-size="lg">
        Stor valideringsmelding.
      </ValidationMessage>
    </div>
  );
};

