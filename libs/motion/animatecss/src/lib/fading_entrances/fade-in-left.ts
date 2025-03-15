/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInLeft.css
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

type fadeInLeftMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInLeftMotionOptions>();

const name = `fadeInLeft`;

/**
 * fadeInLeft animation
 */
export const fadeInLeft = createMotionFromAnimate<fadeInLeftMotionOptions>(
  keyframes([
    style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
    style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeInLeft` animation
 */
export const setFadeInLeftDefaults =
  setDefaults<fadeInLeftMotionOptions>(defaults);

/**
 * fadeInLeft animation on :enter
 * @remarks triggerName: `fadeInLeftOnEnter`
 */
export const fadeInLeftOnEnter = createOnEnter(
  fadeInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInLeft animation on :incr
 * @remarks triggerName: `fadeInLeftOnIncr`
 */
export const fadeInLeftOnIncr = createOnIncr(
  fadeInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
