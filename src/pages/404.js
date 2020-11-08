import { useEffect } from 'react';

const RedirectPage = () => {
  console.log('test');
  useEffect(() => {
    console.log(window.location);
    window.location.replace(`http://${window.location.hostname}`);
  }, []);

  return null;
};

export default RedirectPage;
