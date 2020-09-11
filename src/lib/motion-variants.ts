// SVG
export const svgPathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { type: 'tween', duration: 1, delay: 0.5, ease: 'easeInOut' },
  },
};

export const svgCircleVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { type: 'tween', duration: 1, delay: 0.5, ease: 'easeInOut' },
  },
};

export const exitVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
