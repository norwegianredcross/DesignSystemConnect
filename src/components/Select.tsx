import React from 'react';
import { Select } from 'rk-designsystem';

export const SelectExample = () => {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value placeholder="Choose an option..." />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="option1">Option 1</Select.Item>
        <Select.Item value="option2">Option 2</Select.Item>
        <Select.Item value="option3">Option 3</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};