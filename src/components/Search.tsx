import React from 'react';
import { Search } from 'rk-designsystem';

export const SearchExample = () => {
  return (
    <Search>
      <Search.Input aria-label="Search" placeholder="Search site..." />
      <Search.Button aria-label="Submit search">Go</Search.Button>
    </Search>
  );
};