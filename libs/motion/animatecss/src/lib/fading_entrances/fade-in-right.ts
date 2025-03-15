/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInRight.css
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

type fadeInRightMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInRightMotionOptions>();

const name = `fadeInRight`;

/**
 * fadeInRight animation
 */
export const fadeInRight = createMotionFromAnimate<fadeInRightMotionOptions>(
  keyframes([
    style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }),
    style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeInRight` animation
 */
export const setFadeInRightDefaults =
  setDefaults<fadeInRightMotionOptions>(defaults);

/**
 * fadeInRight animation on :enter
 * @remarks triggerName: `fadeInRightOnEnter`
 */
export const fadeInRightOnEnter = createOnEnter(
  fadeInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInRight animation on :incr
 * @remarks triggerName: `fadeInRightOnIncr`
 */
export const fadeInRightOnIncr = createOnIncr(
  fadeInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
