import React from 'react';
import { DatePicker, DateInput } from 'rk-designsystem';

export const DatePickerExample = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <DatePicker selectedDate={date} onDateSelect={setDate} />;
};

export const DateInputExample = () => {
    return (
      <DateInput
        label="Date of Birth"
        description="Please use DD.MM.YYYY format."
      />
    );
};

export const DateInputErrorExample = () => {
    return (
      <DateInput
        label="Date of Birth"
        error="The date is invalid."
        defaultValue="32.13.2025"
      />
    );
};