import React from 'react';
import { Paragraph } from 'rk-designsystem';

// --- Sizes Example ---
export const ParagraphSizesExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Paragraph data-size="sm">
        Liten avsnittstekst (Small). Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Paragraph>
      <Paragraph data-size="md">
        Medium avsnittstekst (Medium). Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Paragraph>
      <Paragraph data-size="lg">
        Stor avsnittstekst (Large). Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Paragraph>
    </div>
  );
};
