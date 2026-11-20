'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Motion layer for the Developer Offshore console design.
 * CSS handles the continuous 3D cube, code scan, ticker and pipeline pulses.
 * This adds scroll reveals, pointer tilt, scene depth and scroll progress.
 *
 * The effect is keyed to the current pathname so client-side navigation gets a
 * fresh observer for the new page instead of leaving sections at opacity: 0
 * until a hard refresh.
 */
export default function ConsoleMotion() {
  const pathname = usePathname();

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

    /* Scroll reveals, including content mounted after client navigation */
    const seen = new WeakSet<Element>();
    let observer: IntersectionObserver | null = null;

    const reveal = (el: HTMLElement) => {
      el.classList.add('is-in');
      observer?.unobserve(el);
    };

    const inView = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.96 && rect.bottom > -24;
    };

    const observeScope = (scope: ParentNode) => {
      const candidates: HTMLElement[] = [];
      if (scope instanceof HTMLElement && scope.matches('[data-reveal]')) candidates.push(scope);
      scope.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => candidates.push(el));

      candidates.forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (!observer || inView(el)) reveal(el);
        else observer.observe(el);
      });
    };

    if (reduce || !('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      );

      observeScope(document);
      const mutation = new MutationObserver((mutations) => {
        mutations.forEach((mutationRecord) => {
          mutationRecord.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) observeScope(node);
          });
        });
      });
      mutation.observe(document.body, { childList: true, subtree: true });
      cleanups.push(() => mutation.disconnect());
      cleanups.push(() => observer?.disconnect());
    }

    const onPageShow = () => observeScope(document);
    window.addEventListener('pageshow', onPageShow);
    cleanups.push(() => window.removeEventListener('pageshow', onPageShow));

    /* Catch anything already on screen after hydration or a route transition */
    const frame = requestAnimationFrame(() => observeScope(document));
    const settle = window.setTimeout(() => observeScope(document), 350);
    cleanups.push(() => cancelAnimationFrame(frame));
    cleanups.push(() => window.clearTimeout(settle));

    if (!reduce && finePointer) {
      const tilts = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
      const tiltCleanups = tilts.map((el) => {
        let frameId = 0;
        const max = Number(el.dataset.tiltStrength || 5);

        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          cancelAnimationFrame(frameId);
          frameId = requestAnimationFrame(() => {
            el.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
            el.style.setProperty('--rx', `${(0.5 - y) * max * 1.4}deg`);
          });
        };

        const leave = () => {
          cancelAnimationFrame(frameId);
          el.style.removeProperty('--rx');
          el.style.removeProperty('--ry');
        };

        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);
        return () => {
          cancelAnimationFrame(frameId);
          el.removeEventListener('pointermove', move);
          el.removeEventListener('pointerleave', leave);
        };
      });
      cleanups.push(...tiltCleanups);

      const scenes = Array.from(document.querySelectorAll<HTMLElement>('.dx-scene'));
      const sceneCleanups = scenes.map((scene) => {
        const layers = Array.from(scene.querySelectorAll<HTMLElement>('[data-depth]'));
        let frameId = 0;

        const move = (event: PointerEvent) => {
          const rect = scene.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          cancelAnimationFrame(frameId);
          frameId = requestAnimationFrame(() => {
            layers.forEach((layer) => {
              const depth = Number(layer.dataset.depth || 8);
              layer.style.setProperty('--mx', String(x * depth));
              layer.style.setProperty('--my', String(y * depth));
            });
          });
        };

        const leave = () => {
          cancelAnimationFrame(frameId);
          layers.forEach((layer) => {
            layer.style.setProperty('--mx', '0');
            layer.style.setProperty('--my', '0');
          });
        };

        scene.addEventListener('pointermove', move);
        scene.addEventListener('pointerleave', leave);
        return () => {
          cancelAnimationFrame(frameId);
          scene.removeEventListener('pointermove', move);
          scene.removeEventListener('pointerleave', leave);
        };
      });
      cleanups.push(...sceneCleanups);
    }

    return () => {
      cleanups.forEach((fn) => fn());
      /* Keep dx-js on the document so a route transition cannot flash content. */
    };
  }, [pathname]);

  return <div className="dx-progress" aria-hidden="true" />;
}
