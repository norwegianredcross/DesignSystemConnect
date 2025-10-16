import React from 'react';
import { SkeletonLoader } from 'rk-designsystem';

export const SkeletonRectangleExample = () => {
  return <SkeletonLoader variant="rectangle" width="100%" height={20} />;
};

export const SkeletonCircleExample = () => {
  return <SkeletonLoader variant="circle" width={50} height={50} />;
};

export const SkeletonTextExample = () => {
    return (
        <div>
            <SkeletonLoader variant="rectangle" width="80%" height={16} />
            <SkeletonLoader variant="rectangle" width="90%" height={16} />
            <SkeletonLoader variant="rectangle" width="60%" height={16} />
        </div>
    );
};