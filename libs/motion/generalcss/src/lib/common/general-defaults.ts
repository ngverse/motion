import { MotionDefaultOptions, MotionOptions } from '@ngverse/motion/core';

let MOTION_DEFAULTS: Required<MotionDefaultOptions> = {
  duration: 250,
  delay: 0,
  children: 'none',
  easing: 'ease-in-out',
};

export function getGeneralDefaults() {
  return MOTION_DEFAULTS;
}

export function setGeneralDefaults(options: MotionOptions) {
  const defaults = { ...MOTION_DEFAULTS, ...options };

  MOTION_DEFAULTS = defaults;
}
