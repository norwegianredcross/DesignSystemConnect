import React from 'react';
import { List, Link } from 'rk-designsystem';

export const UnorderedListExample = () => {
  return (
    <List.Unordered>
      <List.Item>First item</List.Item>
      <List.Item>Second item</List.Item>
      <List.Item>Third item</List.Item>
    </List.Unordered>
  );
};

export const OrderedListExample = () => {
  return (
    <List.Ordered>
      <List.Item>First step</List.Item>
      <List.Item>Second step</List.Item>
      <List.Item>Third step</List.Item>
    </List.Ordered>
  );
};

export const NestedListExample = () => {
    return (
      <List.Unordered>
        <List.Item>
          Fruit
          <List.Unordered>
            <List.Item>Apple</List.Item>
            <List.Item>Banana</List.Item>
          </List.Unordered>
        </List.Item>
        <List.Item>Vegetable</List.Item>
      </List.Unordered>
    );
};

export const ListOfLinksExample = () => {
    return (
      <List.Unordered style={{ listStyle: 'none', padding: 0 }}>
        <List.Item><Link href="#">Dashboard</Link></List.Item>
        <List.Item><Link href="#">Settings</Link></List.Item>
        <List.Item><Link href="#">Profile</Link></List.Item>
      </List.Unordered>
    );
};