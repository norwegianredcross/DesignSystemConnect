import React from 'react';
import { Tooltip, Button } from 'rk-designsystem';

export const TooltipTopExample = () => {
  return (
    <Tooltip content="Tooltip text here" placement="top">
      <Button>Hover Top</Button>
    </Tooltip>
  );
};

export const TooltipRightExample = () => {
    return (
      <Tooltip content="Tooltip text here" placement="right">
        <Button>Hover Right</Button>
      </Tooltip>
    );
};