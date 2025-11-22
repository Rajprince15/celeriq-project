import { useEffect, useRef } from 'react';

const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class for neural network nodes
    class Particle {
      x: number;
      y: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update(scrollY: number) {
        // Parallax effect based on scroll
        this.y = this.baseY + scrollY * 0.3;
        
        // Move particles
        this.x += this.speedX;
        
        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 150;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Grid lines
    const drawGrid = (scrollY: number) => {
      if (!ctx) return;
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.05)';
      ctx.lineWidth = 1;

      const gridSize = 50;
      const offsetY = (scrollY * 0.5) % gridSize;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Connect nearby particles
    const connectParticles = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Floating code-like elements
    class CodeBlock {
      x: number;
      y: number;
      baseY: number;
      text: string;
      opacity: number;
      speed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseY = this.y;
        const codeSnippets = ['AI', '01', '<>', '{}', '[]', 'ML', 'NN', '//'];
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.opacity = Math.random() * 0.2 + 0.1;
        this.speed = Math.random() * 0.3 + 0.1;
      }

      update(scrollY: number) {
        this.y = this.baseY + scrollY * 0.2;
        this.x += this.speed;
        if (this.x > canvas.width) {
          this.x = -50;
          this.baseY = Math.random() * canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.font = '14px monospace';
        ctx.fillStyle = `rgba(236, 72, 153, ${this.opacity})`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    const codeBlocks: CodeBlock[] = [];
    for (let i = 0; i < 30; i++) {
      codeBlocks.push(new CodeBlock());
    }

    // Glowing orbs
    class GlowOrb {
      x: number;
      y: number;
      baseY: number;
      radius: number;
      hue: number;
      speed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseY = this.y;
        this.radius = Math.random() * 30 + 20;
        this.hue = Math.random() * 60 + 260; // Purple to cyan range
        this.speed = Math.random() * 0.2 + 0.1;
      }

      update(scrollY: number) {
        this.y = this.baseY + scrollY * 0.4;
        this.x += this.speed;
        if (this.x > canvas.width + this.radius) {
          this.x = -this.radius;
          this.baseY = Math.random() * canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `hsla(${this.hue}, 80%, 60%, 0.15)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 80%, 60%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const glowOrbs: GlowOrb[] = [];
    for (let i = 0; i < 8; i++) {
      glowOrbs.push(new GlowOrb());
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!ctx) return;
      
      const scrollY = window.scrollY;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw elements in layers
      drawGrid(scrollY);
      
      glowOrbs.forEach(orb => {
        orb.update(scrollY);
        orb.draw();
      });

      particles.forEach(particle => {
        particle.update(scrollY);
        particle.draw();
      });

      connectParticles();

      codeBlocks.forEach(block => {
        block.update(scrollY);
        block.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default TechBackground;
