import React from 'react';

export const NoMatch = ({ location }: any) => {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};