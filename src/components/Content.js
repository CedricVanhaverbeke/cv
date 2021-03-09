import React from 'react';

const Content = ({ children, className }) => {
  return (
    <div className={`flex-grow flex flex-col lg:py-8 ${className}`}>
      {children}
    </div>
  );
};

export default Content;
