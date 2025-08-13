"use client";
import { useEffect, useRef } from "react";

export default function Fireworks() {
  const canvasRef = useRef(null);
  const fireworksRef = useRef([]);
  const textAlphaRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = [
      "#006400", "#228B22", // green shades
      "#FFFFFF",            // white
      "#FFA500", "#FFD700"  // orange/yellow
    ];

    const random = (min, max) => Math.random() * (max - min) + min;

    function Firework(x, y) {
      this.particles = [];
      for (let i = 0; i < 250; i++) {
        this.particles.push({
          x,
          y,
          angle: Math.random() * 2 * Math.PI,
          speed: random(4, 9),
          radius: random(2, 4),
          alpha: 1,
          decay: random(0.010, 0.015),
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: random(10, 25)
        });
      }
    }

    Firework.prototype.update = function () {
      this.particles.forEach((p) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.alpha -= p.decay;
      });
    };

    Firework.prototype.draw = function () {
      this.particles.forEach((p) => {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(
          p.x - Math.cos(p.angle) * p.trail,
          p.y - Math.sin(p.angle) * p.trail
        );
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });
    };

    function launchRandomFirework() {
      const x = random(150, canvas.width - 150);
      const y = random(150, canvas.height / 2);
      fireworksRef.current.push(new Firework(x, y));
    }

    function animate() {
      ctx.globalAlpha = 1; // reset alpha before clearing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw text only if visible
      if (textAlphaRef.current > 0.01) {
        const fontSize = Math.min(canvas.width * 0.05, 60);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = "center";
        ctx.globalAlpha = textAlphaRef.current;
        ctx.fillStyle = "#000000"; // pure black
        ctx.fillText(
          "Happy 78th Independence Day",
          canvas.width / 2,
          canvas.height / 2
        );
      }

      fireworksRef.current.forEach((fw, i) => {
        fw.update();
        fw.draw();
        if (fw.particles[0].alpha <= 0) fireworksRef.current.splice(i, 1);
      });

      // Fade text out when fireworks end
      if (fireworksRef.current.length === 0 && textAlphaRef.current > 0) {
        textAlphaRef.current -= 0.02;
        if (textAlphaRef.current < 0) textAlphaRef.current = 0; // fully invisible
      }

      requestAnimationFrame(animate);
    }

    animate();

    // Launch fireworks every 0.5s for 5s
    const interval = setInterval(launchRandomFirework, 500);
    launchRandomFirework();

    // Fade in text at start
    let fadeIn = setInterval(() => {
      if (textAlphaRef.current < 1) {
        textAlphaRef.current += 0.05;
      } else {
        clearInterval(fadeIn);
      }
    }, 50);

    // Stop fireworks after 5s
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
