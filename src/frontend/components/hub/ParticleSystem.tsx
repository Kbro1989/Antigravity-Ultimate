import React, { useRef, useEffect, useState } from 'react';

interface ParticleSystemProps {
    layer?: 'background' | 'foreground' | 'deepspace';
    className?: string;
}

export function ParticleSystem({ layer = 'background', className = '' }: ParticleSystemProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        updateSize();

        // Deep space star field with warp effect
        if (layer === 'background' || layer === 'deepspace') {
            const stars: Star[] = [];
            const starCount = 400;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            class Star {
                x!: number;
                y!: number;
                z!: number;
                prevX!: number;
                prevY!: number;
                size!: number;
                hue!: number;
                speed!: number;

                constructor() {
                    this.reset(true);
                }

                reset(initial = false) {
                    if (!canvas) return;
                    // Random position in 3D space
                    this.x = (Math.random() - 0.5) * canvas.width * 2;
                    this.y = (Math.random() - 0.5) * canvas.height * 2;
                    this.z = initial ? Math.random() * 2000 : 2000;
                    this.prevX = this.x;
                    this.prevY = this.y;
                    this.size = Math.random() * 1.5 + 0.5;
                    this.hue = Math.random() * 60 + 180; // Cyan to blue
                    this.speed = Math.random() * 2 + 3;
                }

                update() {
                    if (!canvas) return;
                    this.prevX = this.x;
                    this.prevY = this.y;
                    this.z -= this.speed;

                    if (this.z <= 0) {
                        this.reset();
                    }
                }

                draw() {
                    if (!ctx || !canvas) return;
                    const cx = canvas.width / 2;
                    const cy = canvas.height / 2;

                    // Project 3D to 2D
                    const scale = 800 / this.z;
                    const x2d = this.x * scale + cx;
                    const y2d = this.y * scale + cy;

                    // Previous position for streak
                    const prevScale = 800 / (this.z + this.speed * 2);
                    const prevX2d = this.prevX * prevScale + cx;
                    const prevY2d = this.prevY * prevScale + cy;

                    // Opacity increases as star gets closer
                    const opacity = Math.min(1, (2000 - this.z) / 1000);
                    const size = this.size * scale;

                    // Draw streak (warp effect)
                    ctx.beginPath();
                    ctx.moveTo(prevX2d, prevY2d);
                    ctx.lineTo(x2d, y2d);
                    const streakAlpha = opacity * 0.6;
                    ctx.strokeStyle = `hsla(${this.hue}, 100%, 70%, ${streakAlpha})`;
                    ctx.lineWidth = Math.max(0.5, size * 0.5);
                    ctx.stroke();

                    // Draw star point
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, Math.max(0.5, size), 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${this.hue}, 100%, 80%, ${opacity})`;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`;
                    ctx.fill();
                }
            }

            for (let i = 0; i < starCount; i++) {
                stars.push(new Star());
            }

            let animationId: number;

            const animate = () => {
                if (!ctx || !canvas) return;
                // Clear with semi-transparent black for trail effect
                ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                stars.forEach(star => {
                    star.update();
                    star.draw();
                });

                animationId = requestAnimationFrame(animate);
            };

            animate();

            const handleResize = () => {
                updateSize();
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                cancelAnimationFrame(animationId);
            };
        }

        // Foreground constellation particles (unchanged)
        if (layer === 'foreground') {
            const particles: Particle[] = [];
            const particleCount = 40;

            class Particle {
                x!: number;
                y!: number;
                vx!: number;
                vy!: number;
                size!: number;
                opacity!: number;
                hue!: number;

                constructor() {
                    this.reset();
                }

                reset() {
                    if (!canvas) return;
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.vx = (Math.random() - 0.5) * 1.5;
                    this.vy = (Math.random() - 0.5) * 1.5;
                    this.size = Math.random() * 3 + 2;
                    this.opacity = Math.random() * 0.6 + 0.4;
                    this.hue = Math.random() * 60 + 180;
                }

                update() {
                    if (!canvas) return;
                    this.x += this.vx;
                    this.y += this.vy;

                    if (this.x < 0) this.x = canvas.width;
                    if (this.x > canvas.width) this.x = 0;
                    if (this.y < 0) this.y = canvas.height;
                    if (this.y > canvas.height) this.y = 0;
                }

                draw() {
                    if (!ctx) return;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`;
                    ctx.shadowBlur = 20;
                    ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`;
                    ctx.fill();
                }
            }

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }

            let animationId: number;

            const animate = () => {
                if (!ctx || !canvas) return;
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle, i) => {
                    particle.update();
                    particle.draw();

                    // Constellation connections
                    for (let j = i + 1; j < particles.length; j++) {
                        const other = particles[j];
                        const dx = particle.x - other.x;
                        const dy = particle.y - other.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(other.x, other.y);
                            const alpha = (1 - distance / 150) * 0.4;
                            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                });

                animationId = requestAnimationFrame(animate);
            };

            animate();

            const handleResize = () => {
                updateSize();
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                cancelAnimationFrame(animationId);
            };
        }
    }, [layer]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none ${className}`}
            style={{ zIndex: layer === 'background' || layer === 'deepspace' ? -1 : 20 }}
        />
    );
}
