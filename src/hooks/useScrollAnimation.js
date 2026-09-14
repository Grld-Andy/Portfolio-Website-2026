import { useEffect, useRef } from 'react';

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

export function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
