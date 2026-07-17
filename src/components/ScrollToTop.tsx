import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset window scroll to the absolute top smoothly
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;