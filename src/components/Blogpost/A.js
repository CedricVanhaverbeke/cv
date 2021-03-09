import React from 'react';

const A = ({ href, children }) => {
  return (
    <a target="_blank" href={href} className="text-extra">
      {children}
    </a>
  );
};

export default A;
