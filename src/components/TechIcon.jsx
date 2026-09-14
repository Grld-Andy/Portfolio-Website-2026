import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

export default function TechIcon({ className, children }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={`tech-icon tech-animate ${className}`}>
      {children}
    </div>
  );
}
