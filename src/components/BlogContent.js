import React from 'react';

const BlogContent = ({ children }) => {
  return (
    <div className="flex-grow flex flex-col items-center p-4 my-16">
      <div className="max-w-full md:max-w-3xl text-white blogpost">
        {children}
      </div>
    </div>
  );
};

export default BlogContent;
