import React from 'react';
import { Radio, Fieldset, useRadioGroup } from 'rk-designsystem';

export const RadioGroupExample = () => {
  return (
    <Fieldset legend="Select your option">
      <Radio label="Option A" value="a" name="radio-group"/>
      <Radio label="Option B" value="b" name="radio-group"/>
      <Radio label="Option C" value="c" name="radio-group"/>
    </Fieldset>
  );
};

export const UseRadioGroupExample = () => {
    const { props, getRadioProps } = useRadioGroup({ name: 'hook-group', defaultValue: 'b' });
    return (
        <Fieldset {...props}>
            <legend>Select an option</legend>
            <Radio {...getRadioProps({ value: 'a', label: 'Option A' })} />
            <Radio {...getRadioProps({ value: 'b', label: 'Option B' })} />
        </Fieldset>
    );
};