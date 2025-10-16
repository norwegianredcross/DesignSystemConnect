import React from 'react';
import { Checkbox } from 'rk-designsystem';

export const CheckboxExample = () => {
  return <Checkbox label="Enable notifications" description="We will send you emails." />;
};

export const CheckboxDisabledExample = () => {
    return <Checkbox label="Disabled" disabled={true} />;
};

export const CheckboxErrorExample = () => {
    return <Checkbox label="Terms and Conditions" error="You must accept the terms." />;
};