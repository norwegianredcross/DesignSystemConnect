import React from 'react';
import { Tabs } from 'rk-designsystem';

export const TabsExample = () => {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">My Account</Tabs.Tab>
        <Tabs.Tab value="tab2">Company</Tabs.Tab>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p>This is the content for the My Account tab.</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p>This is the content for the Company tab.</p>
      </Tabs.Content>
    </Tabs>
  );
};