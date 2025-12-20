import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function useScrollReveal(selector = '.sr') {
  useEffect(() => {
    if (!document) return;
    ScrollReveal().reveal(selector, {
      distance: '24px',
      duration: 700,
      easing: 'ease-out',
      origin: 'bottom',
      interval: 80,
    });
  }, [selector]);
}
