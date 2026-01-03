import React from 'react';

const BANNER_TYPES = ['happy', 'sad'];

function Banner({ type, children }) {
  if (!BANNER_TYPES.includes(type)) {
    throw new Error(
      `Wrong banner type: ${type}. Expected types: ${BANNER_TYPES}`
    );
  }

  const className = `banner ${type}`;

  return <div className={className}>{children}</div>;
}

export default Banner;
