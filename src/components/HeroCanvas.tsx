import React, { useEffect, useRef } from 'react';

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glow: string;
  label?: string;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let nodes: NodePoint[] = [];
    let packets: Packet[] = [];

    const nodeColors = [
      { color: '#00f2fe', glow: 'rgba(0, 242, 254, 0.4)' },
      { color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.35)' },
      { color: '#a855f7', glow: 'rgba(168, 85, 247, 0.35)' },
      { color: '#10b981', glow: 'rgba(16, 185, 129, 0.35)' },
    ];

    const initNodes = () => {
      nodes = [];
      packets = [];
      // Adjust density based on screen width
      const count = Math.min(Math.floor((width * height) / 22000), 55);

      for (let i = 0; i < count; i++) {
        const style = nodeColors[Math.floor(Math.random() * nodeColors.length)];
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2.5 + 2,
          color: style.color,
          glow: style.glow
        });
      }

      // Pre-seed some packets
      for (let i = 0; i < 6; i++) {
        spawnPacket();
      }
    };

    const spawnPacket = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) {
        to = Math.floor(Math.random() * nodes.length);
      }
      packets.push({
        fromNode: from,
        toNode: to,
        progress: 0,
        speed: 0.006 + Math.random() * 0.008,
        color: Math.random() > 0.5 ? '#00f2fe' : '#a855f7'
      });
    };

    initNodes();

    let packetInterval = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid dots
      ctx.fillStyle = 'rgba(255, 255, 255, 0.015)';
      const step = 45;
      for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Update and connect nodes
      const maxDistance = 140;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundary
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= (dx / dist) * force * 3;
          node.y -= (dy / dist) * force * 3;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const ndx = node.x - other.x;
          const ndy = node.y - other.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (nDist < maxDistance) {
            const alpha = (1 - nDist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      // Periodically spawn packets
      packetInterval++;
      if (packetInterval > 40 && packets.length < 12) {
        spawnPacket();
        packetInterval = 0;
      }

      // Render packets (data packets moving between nodes)
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];

        if (!from || !to || p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const currX = from.x + (to.x - from.x) * p.progress;
        const currY = from.y + (to.y - from.y) * p.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(currX, currY, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
};
