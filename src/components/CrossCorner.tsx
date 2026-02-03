import React from 'react';
import { CrossCorner } from 'rk-designsystem';

export const CrossCornerDefaultExample = () => {
  return <CrossCorner />;
};

export const CrossCornerPositionsExample = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', width: '300px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <CrossCorner position="top-left" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CrossCorner position="top-right" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <CrossCorner position="bottom-left" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CrossCorner position="bottom-right" />
      </div>
    </div>
  );
};

export const CrossCornerSizesExample = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
      <div>
        <CrossCorner size="sm" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>sm (48px)</p>
      </div>
      <div>
        <CrossCorner size="md" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>md (68px)</p>
      </div>
      <div>
        <CrossCorner size="lg" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>lg (96px)</p>
      </div>
    </div>
  );
};

export const CrossCornerAllVariantsExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <p style={{ marginBottom: '12px', fontWeight: 'bold' }}>Size: {size}</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <CrossCorner size={size} position="top-left" />
            <CrossCorner size={size} position="top-right" />
            <CrossCorner size={size} position="bottom-left" />
            <CrossCorner size={size} position="bottom-right" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const CrossCornerDecorativeExample = () => {
  return (
    <div style={{ position: 'relative', padding: '48px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <div style={{ position: 'absolute', top: '0', left: '0' }}>
        <CrossCorner position="top-left" size="sm" aria-hidden="true" />
      </div>
      <div style={{ position: 'absolute', top: '0', right: '0' }}>
        <CrossCorner position="top-right" size="sm" aria-hidden="true" />
      </div>
      <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
        <CrossCorner position="bottom-left" size="sm" aria-hidden="true" />
      </div>
      <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
        <CrossCorner position="bottom-right" size="sm" aria-hidden="true" />
      </div>
      <p style={{ textAlign: 'center' }}>Content with decorative corners</p>
    </div>
  );
};
