import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll hasta la parte superior de la página cuando cambie la ruta
  }, [pathname]);

  return null;
}

export default ScrollToTop;