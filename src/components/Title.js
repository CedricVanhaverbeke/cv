import React from 'react';

const Title = ({ children }) => (
  <span
    style={{ fontFamily: 'Roboto' }}
    className="text-xl text-white font-bold"
  >
    {children}
  </span>
);

export default Title;
