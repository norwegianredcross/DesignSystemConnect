import React from 'react';
import { Card, Button } from 'rk-designsystem';

export const CardExample = () => {
  return (
    <Card title="Card Title">
      This is the content of the card.
    </Card>
  );
};

export const CardElevatedExample = () => {
    return (
        <Card title="Elevated Card" variant="elevated">
            This card has a shadow.
        </Card>
    );
};