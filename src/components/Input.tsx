import React from 'react';
import { Input, Label, Field } from 'rk-designsystem';

export const InputExample = () => {
  return (
    <Field>
      <Label >Your Name</Label>
      <Input id="input-default" placeholder="e.g., Jane Doe" />
    </Field>
  );
};

export const InputEmailExample = () => {
  return (
    <Field>
      <Label >Email</Label>
      <Input id="input-email" type="email" placeholder="you@example.com" />
    </Field>
  );
};

export const InputInvalidExample = () => {
  return (
    <Field>
      <Label >Email</Label>
      <Input id="input-invalid" type="email" value="invalid-email" aria-invalid={true} />
    </Field>
  );
};

export const InputDisabledExample = () => {
  return (
    <Field>
      <Label >System ID</Label>
      <Input id="input-disabled" value="Cannot be changed" disabled />
    </Field>
  );
};