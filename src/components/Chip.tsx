import React from 'react';
import { Button, Checkbox, Radio } from 'rk-designsystem';

// NOTE: Based on descriptions like "Chip.Button", "Chip.Checkbox", and the 'asChild' prop.
// This pattern is for making another element, like a link or label, look like a chip.

export const ChipButtonExample = () => {
  return (
    <Button asChild data-size="small">
      <a>Clickable Chip</a>
    </Button>
  );
};

export const ChipCheckboxExample = () => {
    return (
        <Checkbox asChild data-size="small">
            <label>
                <input type="checkbox" /> Selectable Chip
            </label>
        </Checkbox>
    );
};

export const ChipRadioExample = () => {
    return (
        <Radio asChild data-size="small">
            <label>
                <input type="radio" name="chip-group" /> Radio Chip
            </label>
        </Radio>
    );
};