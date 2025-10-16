import React from 'react';
import { Breadcrumbs, BreadcrumbsList, BreadcrumbsItem, BreadcrumbsLink } from 'rk-designsystem';

export const BreadcrumbsExample = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Home</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Products</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          Laptops
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  );
};