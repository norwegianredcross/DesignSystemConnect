import React from 'react';
import { Details } from 'rk-designsystem';

// NOTE: The metadata for Details confirms it expects children, likely sub-components.
export const DetailsExample = () => {
  return (
    <Details>
      <Details.Summary>View Terms and Conditions</Details.Summary>
      <Details.Content>
        <p>Here is the full text of the terms and conditions...</p>
      </Details.Content>
    </Details>
  );
};

export const DetailsOpenExample = () => {
    return (
      <Details defaultOpen={true}>
        <Details.Summary>Billing Information</Details.Summary>
        <Details.Content>
          <p>This section is open by default.</p>
        </Details.Content>
      </Details>
    );
};