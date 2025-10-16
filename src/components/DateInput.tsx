import React from 'react';
import { DateInput } from 'rk-designsystem';
// Assuming CalendarIcon is a component you have locally
// import { CalendarIcon } from '../../assets/images/CalendarIcon';

export const DateInputExample = () => {
  return (
    <DateInput
      label="Select a date"
      placeholder="dd.mm.åååå"
      // suffixIcon={<CalendarIcon />}
    />
  );
};

export const DateInputWithValueExample = () => {
  return (
    <DateInput
      label="Select a date"
      placeholder="dd.mm.åååå"
      value="24.12.2023"
      // suffixIcon={<CalendarIcon />}
    />
  );
};

export const DateInputWithErrorExample = () => {
  return (
    <DateInput
      label="Select a date"
      placeholder="dd.mm.åååå"
      error="Invalid date format"
      value="Invalid Date"
      // suffixIcon={<CalendarIcon />}
    />
  );
};

export const DateInputDisabledExample = () => {
  return (
    <DateInput
      label="Select a date"
      placeholder="dd.mm.åååå"
      disabled={true}
      value="01.01.2024"
      // suffixIcon={<CalendarIcon />}
    />
  );
};