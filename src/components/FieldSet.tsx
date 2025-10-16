import React from 'react';
import { Fieldset, Field, Label, Textfield, Textarea } from 'rk-designsystem';

export const FieldsetExample = () => {
  return (
    <Fieldset data-size="md">
      <Fieldset.Legend>User Details</Fieldset.Legend>
      <Fieldset.Description>
        Please provide your information below.
      </Fieldset.Description>

      <Field>
        <Label>Full Name</Label>
        <Textfield id="fieldset-name" />
      </Field>

      <Field>
        <Label>Biography</Label>
        <Textarea id="fieldset-bio" />
      </Field>
    </Fieldset>
  );
};