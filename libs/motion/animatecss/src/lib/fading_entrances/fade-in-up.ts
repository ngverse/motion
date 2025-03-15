/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInUp.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnEnter,
  createOnIncr,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type fadeInUpMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInUpMotionOptions>();

const name = `fadeInUp`;

/**
 * fadeInUp animation
 */
export const fadeInUp = createMotionFromAnimate<fadeInUpMotionOptions>(
  keyframes([
    style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }),
    style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeInUp` animation
 */
export const setFadeInUpDefaults = setDefaults<fadeInUpMotionOptions>(defaults);

/**
 * fadeInUp animation on :enter
 * @remarks triggerName: `fadeInUpOnEnter`
 */
export const fadeInUpOnEnter = createOnEnter(
  fadeInUp,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInUp animation on :incr
 * @remarks triggerName: `fadeInUpOnIncr`
 */
export const fadeInUpOnIncr = createOnIncr(
  fadeInUp,
  name,
  defaults,
  getAnimatecssDefaults()
);
