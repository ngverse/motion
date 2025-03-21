import { MotionDefaultOptions, MotionOptions } from '@ngverse/motion/core';

let MOTION_DEFAULTS: Required<MotionDefaultOptions> = {
  duration: 1000,
  delay: 0,
  children: 'none',
  easing: 'ease-in-out',
};

export function getAnimatecssDefaults() {
  return MOTION_DEFAULTS;
}

export function setAnimatecssDefaults(options: MotionOptions) {
  const defaults = { ...MOTION_DEFAULTS, ...options };

  MOTION_DEFAULTS = defaults;
}
