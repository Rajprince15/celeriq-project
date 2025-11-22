import { useEffect, useRef } from 'react';

interface BackgroundAnimationProps {
  show: boolean;
}

const BackgroundAnimation = ({ show }: BackgroundAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !show) return;

    const container = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [show]);

  if (!show) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ opacity: show ? 1 : 0, transition: 'opacity 1s ease-in' }}
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-60" />
      
      {/* Neural Network Lines - Horizontal flowing lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`neural-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-neural-flow"
          style={{
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
            opacity: 0.4,
            width: '100%',
          }}
        />
      ))}

      {/* Diagonal Neural Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`diagonal-${i}`}
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{
            left: `${10 + i * 12}%`,
            transform: `rotate(${15 + Math.random() * 10}deg)`,
            opacity: 0.15,
          }}
        />
      ))}

      {/* Floating Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            opacity: 0.2,
          }}
        />
      ))}

      {/* AI Circuit Nodes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-2 h-2 bg-primary/40 rounded-full animate-glow-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            boxShadow: '0 0 10px hsl(var(--primary))',
          }}
        />
      ))}

      {/* Glowing Orbs */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full bg-primary/10 blur-3xl animate-glow-pulse"
          style={{
            width: `${200 + Math.random() * 250}px`,
            height: `${200 + Math.random() * 250}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${6 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Data Stream Effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`stream-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-neural-flow"
          style={{
            left: `${20 + i * 15}%`,
            height: '100%',
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;