import { AnimateDefaultOptions, AnimateOptions } from './animate-types';

let ANIMATE_DEFAULTS: AnimateDefaultOptions = {
  time: '1s',
  children: 'none',
};

export function getAnimateDefaults() {
  return ANIMATE_DEFAULTS;
}

export function setAnimateDefaults(options: AnimateOptions) {
  const defaults = { ...ANIMATE_DEFAULTS, ...options };

  ANIMATE_DEFAULTS = defaults;
}
