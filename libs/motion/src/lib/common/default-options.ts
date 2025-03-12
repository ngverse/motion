import { MotionDefaultOptions, MotionOptions } from './motion-types';

let ANIMATE_DEFAULTS: MotionDefaultOptions = {
  time: '1s',
  children: 'none',
};

export function getMotionDefaults() {
  return ANIMATE_DEFAULTS;
}

export function setMotionDefaults(options: MotionOptions) {
  const defaults = { ...ANIMATE_DEFAULTS, ...options };

  ANIMATE_DEFAULTS = defaults;
}
