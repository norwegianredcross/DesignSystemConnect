import React from 'react';
import { ErrorSummary } from 'rk-designsystem';

// NOTE: Assuming a composite pattern for listing errors.
export const ErrorSummaryExample = () => {
  return (
    <ErrorSummary>
      <ErrorSummary.Heading>The form contains 2 errors</ErrorSummary.Heading>
      <ErrorSummary.List>
        <ErrorSummary.Item href="#field-email">Enter a valid email address</ErrorSummary.Item>
        <ErrorSummary.Item href="#field-password">Password must be at least 8 characters</ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary>
  );
};