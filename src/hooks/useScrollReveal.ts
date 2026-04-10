import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) {
      const revealElements = el.querySelectorAll('.section-reveal, .image-mask-reveal');
      revealElements.forEach((el) => observer.observe(el));
      // Also observe the container itself
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};
