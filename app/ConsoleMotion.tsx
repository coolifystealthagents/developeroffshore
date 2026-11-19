'use client';

import { useEffect } from 'react';

/**
 * Motion layer for the Developer Offshore console design.
 * CSS handles the continuous 3D cube, code scan, ticker and pipeline pulses.
 * This adds scroll reveals, pointer tilt, scene depth and scroll progress.
 */
export default function ConsoleMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dx-js');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cleanups: Array<() => void> = [];

    const progress = document.querySelector<HTMLElement>('.dx-progress');
    const header = document.querySelector<HTMLElement>('.dx-header');
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const value = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (progress) progress.style.transform = `scaleX(${value})`;
        if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (reduce || !('IntersectionObserver' in window)) {
      revealItems.forEach((el) => el.classList.add('is-in'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.classList.add('is-in');
            observer.unobserve(el);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      );
      revealItems.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());
    }

    if (!reduce && finePointer) {
      const tilts = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
      const tiltCleanups = tilts.map((el) => {
        let frame = 0;
        const max = Number(el.dataset.tiltStrength || 5);

        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            el.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
            el.style.setProperty('--rx', `${(0.5 - y) * max * 1.4}deg`);
          });
        };

        const leave = () => {
          cancelAnimationFrame(frame);
          el.style.removeProperty('--rx');
          el.style.removeProperty('--ry');
        };

        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);
        return () => {
          cancelAnimationFrame(frame);
          el.removeEventListener('pointermove', move);
          el.removeEventListener('pointerleave', leave);
        };
      });
      cleanups.push(...tiltCleanups);

      const scenes = Array.from(document.querySelectorAll<HTMLElement>('.dx-scene'));
      const sceneCleanups = scenes.map((scene) => {
        const layers = Array.from(scene.querySelectorAll<HTMLElement>('[data-depth]'));
        let frame = 0;

        const move = (event: PointerEvent) => {
          const rect = scene.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            layers.forEach((layer) => {
              const depth = Number(layer.dataset.depth || 8);
              layer.style.setProperty('--mx', String(x * depth));
              layer.style.setProperty('--my', String(y * depth));
            });
          });
        };

        const leave = () => {
          cancelAnimationFrame(frame);
          layers.forEach((layer) => {
            layer.style.setProperty('--mx', '0');
            layer.style.setProperty('--my', '0');
          });
        };

        scene.addEventListener('pointermove', move);
        scene.addEventListener('pointerleave', leave);
        return () => {
          cancelAnimationFrame(frame);
          scene.removeEventListener('pointermove', move);
          scene.removeEventListener('pointerleave', leave);
        };
      });
      cleanups.push(...sceneCleanups);
    }

    return () => {
      cleanups.forEach((fn) => fn());
      root.classList.remove('dx-js');
    };
  }, []);

  return <div className="dx-progress" aria-hidden="true" />;
}
