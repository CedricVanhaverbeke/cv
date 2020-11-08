import { useState, useEffect } from 'react';

const useWindowWidth = (callback) => {
  const [windowWith, setWindowWith] = useState();

  useEffect(() => {
    function onResize() {
      if (window.innerWidth) {
        setWindowWith(window.innerWidth);
        if (callback) {
          callback();
        }
      }
    }

    onResize();

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowWith;
};

export default useWindowWidth;
