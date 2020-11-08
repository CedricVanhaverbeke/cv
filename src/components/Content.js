import React from 'react';

const Content = ({ children }) => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-2 md:px-4 lg:px-16 lg:py-8 lg:overflow-hidden">
      {children}
    </div>
  );
};

export default Content;
