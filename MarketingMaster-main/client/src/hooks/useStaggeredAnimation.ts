import { useEffect, useState } from 'react';

interface UseStaggeredAnimationOptions {
  staggerDelay?: number;
  baseDelay?: number;
}

export const useStaggeredAnimation = (
  itemCount: number,
  options: UseStaggeredAnimationOptions = {}
) => {
  const { staggerDelay = 100, baseDelay = 0 } = options;
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const allItems = new Set(Array.from({ length: itemCount }, (_, i) => i));
      setAnimatedItems(allItems);
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setAnimatedItems(prev => new Set(prev).add(i));
      }, baseDelay + i * staggerDelay);

      timers.push(timer);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [itemCount, staggerDelay, baseDelay]);

  return animatedItems;
};