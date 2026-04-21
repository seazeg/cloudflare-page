'use client';

import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top scroll-to-target ${isVisible ? 'display-block' : ''}`}
      data-target="html"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <span className="fa fa-angle-up"></span>
    </div>
  );
}
