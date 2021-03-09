import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    window.location.replace(`http://${window.location.hostname}`);
  }, []);

  return null;
};

export default RedirectPage;
