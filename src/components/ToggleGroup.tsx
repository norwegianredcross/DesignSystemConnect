import React from 'react';
import { ToggleGroup } from 'rk-designsystem';

export const ToggleGroupExample = () => {
  return (
    <ToggleGroup defaultValue="center" aria-label="Text alignment">
      <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
      <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
      <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
    </ToggleGroup>
  );
};