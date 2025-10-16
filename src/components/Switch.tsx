import React from 'react';
import { Switch } from 'rk-designsystem';

export const SwitchExample = () => {
  return <Switch label="Enable notifications" />;
};

export const SwitchWithDescriptionExample = () => {
    return <Switch label="Marketing emails" description="Receive updates about new products." />;
};

export const SwitchPositionEndExample = () => {
    return <Switch label="Label on the left" position="end" />;
};