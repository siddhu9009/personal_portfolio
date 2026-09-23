import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Reduced count and soft alpha particles for subtle background texture
    const numStars = 30;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.4,
      alpha: Math.random() * 0.18 + 0.05,
      speed: Math.random() * 0.15 + 0.05,
    }));

    let scrollY = window.scrollY;
    let targetScrollY = scrollY;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      scrollY += (targetScrollY - scrollY) * 0.05;

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      // Extremely low opacity grid lines so foreground text and 3D Avatar pop cleanly
      const gridColor = isDark ? 'rgba(109, 94, 240, 0.025)' : 'rgba(82, 67, 217, 0.02)';
      const starColor = isDark ? '255, 122, 26' : '230, 96, 0';

      // 1. Perspective Cyber Grid (Subtle Texture)
      const gridSize = 80;
      const offsetY = (scrollY * 0.15) % gridSize;

      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + (mouseX - width / 2) * 0.01, height);
        ctx.stroke();
      }

      for (let y = -gridSize; y <= height + gridSize; y += gridSize) {
        const renderY = y - offsetY;
        ctx.beginPath();
        ctx.moveTo(0, renderY);
        ctx.lineTo(width, renderY + (mouseY - height / 2) * 0.005);
        ctx.stroke();
      }

      // 2. Parallax Depth Field Particles (Soft Ambiance)
      stars.forEach((star) => {
        star.y -= star.speed + (targetScrollY - scrollY) * 0.005;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.fillStyle = `rgba(${starColor}, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x + (mouseX - width / 2) * 0.005, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
}
