import React, { useState } from 'react';
import { Pagination, usePagination } from 'rk-designsystem';

export const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 10;
  const { pages, prevButtonProps, nextButtonProps } = usePagination({
    currentPage,
    totalPages,
    onChange: (_e: React.MouseEvent<HTMLButtonElement>, page: number) =>
      setCurrentPage(page),
  });

  return (
    <Pagination aria-label="Page navigation">
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Button {...prevButtonProps}>Previous</Pagination.Button>
        </Pagination.Item>

        {pages.map(
          ({
            page,
            itemKey,
            buttonProps,
          }: {
            page: number | string;
            itemKey: string;
            buttonProps: any;
          }) => (
            <Pagination.Item key={itemKey}>
              {typeof page === 'number' ? (
                <Pagination.Button {...buttonProps}>{page}</Pagination.Button>
              ) : (
                <span>...</span>
              )}
            </Pagination.Item>
          )
        )}

        <Pagination.Item>
          <Pagination.Button {...nextButtonProps}>Next</Pagination.Button>
        </Pagination.Item>
      </Pagination.List>
    </Pagination>
  );
};