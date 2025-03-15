/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeIn.css
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

type fadeInMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInMotionOptions>();

const name = `fadeIn`;

/**
 * fadeIn animation
 */
export const fadeIn = createMotionFromAnimate<fadeInMotionOptions>(
  keyframes([
    style({ opacity: 0, offset: 0 }),
    style({ opacity: 1, offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeIn` animation
 */
export const setFadeInDefaults = setDefaults<fadeInMotionOptions>(defaults);

/**
 * fadeIn animation on :enter
 * @remarks triggerName: `fadeInOnEnter`
 */
export const fadeInOnEnter = createOnEnter(
  fadeIn,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeIn animation on :incr
 * @remarks triggerName: `fadeInOnIncr`
 */
export const fadeInOnIncr = createOnIncr(
  fadeIn,
  name,
  defaults,
  getAnimatecssDefaults()
);
