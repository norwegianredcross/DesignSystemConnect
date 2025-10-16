import React from 'react';
import { Button } from 'rk-designsystem';

export const PrimaryButtonExample = () => {
  return <Button variant="primary">Primary</Button>;
};

export const SecondaryButtonExample = () => {
  return <Button variant="secondary">Secondary</Button>;
};

export const LoadingButtonExample = () => {
    return <Button variant="primary" loading={true}>Submitting</Button>;
};

export const IconButtonExample = () => {
    return (
        <Button variant="secondary" icon={true} aria-label="Settings">
            <span>⚙️</span>
        </Button>
    );
};

// Based on "Chip.Button"
export const ChipButtonExample = () => {
    return (
        <Button asChild>
            <a>Clickable Chip</a>
        </Button>
    );
};