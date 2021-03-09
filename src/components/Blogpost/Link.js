import React from 'react';

const Link = ({ href, children }) => {
  return (
    <a target="_blank" href={href} className="text-extra">
      {children}
    </a>
  );
};

export default Link;
