import React from 'react';
import { Divider } from 'rk-designsystem';

export const DividerExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <span>First item</span>
      <Divider />
      <span>Second item</span>
    </div>
  );
};