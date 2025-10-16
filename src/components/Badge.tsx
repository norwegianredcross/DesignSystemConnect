import React from 'react';
import { Badge, BadgePosition } from 'rk-designsystem';

export const BadgeExample = () => {
  return <Badge count={12} />;
};

export const BadgePositionedExample = () => {
  return (
    <BadgePosition placement="top-right">
      <Badge count={3} />
      <div style={{ width: '50px', height: '50px', backgroundColor: '#eee' }} />
    </BadgePosition>
  );
};