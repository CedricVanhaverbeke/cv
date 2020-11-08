import React, { useState } from 'react';

const Window = ({ children, className, isClosable }) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) {
    return (
      <span className="text-sm sm:text-md sm:text-xl lg:text-2xl xl:text-4xl text-white pb-20">
        Yes, the terminal actually closes... Click{' '}
        <a
          className="cursor-pointer text-extra"
          onClick={() => setIsVisible(true)}
        >
          here
        </a>{' '}
        to open it again.
      </span>
    );
  }

  return (
    <div
      className={`flex-col flex-grow w-full rounded-xl p-1 bg-dark overflow-hidden ${className}`}
    >
      <div className="h-8 flex items-center justify-start p-3 gap-x-2">
        <button
          onClick={() => {
            if (isClosable) {
              setIsVisible(false);
            }
          }}
          className={`w-3 h-3 bg-extra rounded-full ${
            isClosable || 'cursor-default'
          }`}
        />
        <button className="w-3 h-3 bg-orange rounded-full cursor-default" />
        <button className="w-3 h-3 bg-green rounded-full cursor-default" />
      </div>
      {children}
    </div>
  );
};

export default Window;
