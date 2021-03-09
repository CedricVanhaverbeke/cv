import React from 'react';

const H1 = ({ children }) => {
  return (
    <h1 style={{ fontFamily: 'Roboto' }} className="text-2xl md:text-3xl my-6">
      {children}
    </h1>
  );
};

export default H1;
