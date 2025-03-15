/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInUpBig.css
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

type fadeInUpBigMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInUpBigMotionOptions>();

const name = `fadeInUpBig`;

/**
 * fadeInUpBig animation
 */
export const fadeInUpBig = createMotionFromAnimate<fadeInUpBigMotionOptions>(
  keyframes([
    style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)', offset: 0 }),
    style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeInUpBig` animation
 */
export const setFadeInUpBigDefaults =
  setDefaults<fadeInUpBigMotionOptions>(defaults);

/**
 * fadeInUpBig animation on :enter
 * @remarks triggerName: `fadeInUpBigOnEnter`
 */
export const fadeInUpBigOnEnter = createOnEnter(
  fadeInUpBig,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInUpBig animation on :incr
 * @remarks triggerName: `fadeInUpBigOnIncr`
 */
export const fadeInUpBigOnIncr = createOnIncr(
  fadeInUpBig,
  name,
  defaults,
  getAnimatecssDefaults()
);
