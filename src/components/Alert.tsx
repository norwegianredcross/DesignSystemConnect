import React from 'react';
// This import assumes 'rk-designsystem' is correctly installed and configured in the project.
// The Alert component within this library must be defined to accept 'children' as a prop.
import { Alert } from 'rk-designsystem';

export const InfoAlertExample = () => {
  return (
    <Alert data-color="info" title="Information">
      This is an informational alert.
    </Alert>
  );
};

export const SuccessAlertExample = () => {
  return (
    <Alert data-color="success" title="Success">
      The operation was successful!
    </Alert>
  );
};

export const WarningAlertExample = () => {
  return (
    <Alert data-color="warning" title="Warning">
      Please be aware of this important notice.
    </Alert>
  );
};

export const DangerAlertExample = () => {
  return (
    <Alert data-color="danger" title="Error">
      An error occurred during the process.
    </Alert>
  );
};