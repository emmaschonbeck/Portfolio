"use client";
import React, { useEffect, useRef } from 'react';

const DigitalRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "01";
    const fontSize = 16; 
    
    /* ÄNDRING: Vi ökar avståndet mellan kolumnerna genom att dela bredden på ett högre värde */
    /* Nu blir det ca 40 pixlar mellan varje vertikal rad istället för 16 */
    const spacing = 20; 
    const columns = canvas.width / spacing;
    
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#1fe96c";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.globalAlpha = 0.2; 

        /* ÄNDRING: Vi ritar ut texten med det nya bredare mellanrummet (spacing) */
        /* Och vi multiplicerar drops[i] med ett högre värde (t.ex. 30 istället för fontSize) */
        /* för att få ett större vertikalt gap mellan siffrorna i samma fallande rad */
        const x = i * spacing;
        const y = Math.floor(drops[i]) * 25; // 35 är det nya vertikala avståndet
        
        ctx.fillText(text, x, y);

        // Återställ droppen om den går utanför skärmen
        if (y > canvas.height && Math.random() > 0.985) {
          drops[i] = 0;
        }

        drops[i] += 0.3; // Ännu lite långsammare för en riktigt lugn känsla
      }
    };

    const interval = setInterval(draw, 90); 
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-black"
    />
  );
};

export default DigitalRain;