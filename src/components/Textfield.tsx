import React from 'react';
import { Textfield } from 'rk-designsystem';

export const TextfieldExample = () => {
  return <Textfield label="First Name" description="Enter your given name." />;
};

export const TextfieldErrorExample = () => {
    return <Textfield label="Email" error="This is not a valid email address." defaultValue="test@" />;
};

export const TextfieldMultilineExample = () => {
    return <Textfield label="Your Feedback" multiline={true} />;
};

export const TextfieldWithAffixExample = () => {
    return <Textfield label="Price" prefix="$" suffix=".00" defaultValue="50" />;
};