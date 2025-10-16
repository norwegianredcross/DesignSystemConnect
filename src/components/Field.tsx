import React from 'react';
import { Field, Label, FieldDescription, Textfield, Textarea, FieldCounter,  } from 'rk-designsystem';

export const FieldWithTextfieldExample = () => {
  return (
    <Field data-size="md">
      <Label>Field Label</Label>
      <FieldDescription>A short description for the field.</FieldDescription>
      <Textfield id="textfield-1" placeholder="Enter text..." />
    </Field>
  );
};

export const FieldWithTextareaAndCounterExample = () => {
  return (
    <Field data-size="md">
      <Label>Description</Label>
      <Textarea id="textarea-1" maxLength={50} rows={3} />
      <FieldCounter limit={50} />
    </Field>
  );
};