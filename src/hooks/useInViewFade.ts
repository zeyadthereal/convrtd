import { useEffect } from 'react';

export function useInViewFade() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in-up');
    const onScroll = () => {
      els.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
