import React from 'react';
import { Popover, Button } from 'rk-designsystem';

export const PopoverExample = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>Toggle Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <p>This is the content of the popover.</p>
      </Popover.Content>
    </Popover.Root>
  );
};