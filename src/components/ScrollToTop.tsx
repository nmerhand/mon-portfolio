import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll en haut à gauche
  }, [pathname]); // à chaque changement de route

  return null; // ne rend rien
};

export default ScrollToTop;