export const navVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 20,
      mass: 0.8,
      delay: 0.2,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration: duration || 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay = 0) => ({
  hidden: {
    y: 40,
    opacity: 0,
    filter: 'blur(4px)',
  },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 12,
      mass: 0.8,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 15,
    filter: 'blur(2px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'tween',
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeIn = (direction, type, delay = 0, duration = 0.75) => ({
  hidden: {
    x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
    y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
    opacity: 0,
    filter: 'blur(3px)',
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
    opacity: 0,
  },
  show: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 30,
      damping: 15,
      mass: 1.2,
      delay: 0.3,
    },
  },
});

export const zoomIn = (delay = 0, duration = 0.75) => ({
  hidden: {
    scale: 0.85,
    opacity: 0,
    filter: 'blur(4px)',
  },
  show: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
      mass: 0.8,
      delay: 0.3,
    },
  },
};

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

export const glowPulse = {
  hidden: { opacity: 0.4 },
  show: {
    opacity: [0.4, 0.7, 0.4],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
