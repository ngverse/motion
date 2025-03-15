/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInRightBig.css
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

type fadeInRightBigMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInRightBigMotionOptions>();

const name = `fadeInRightBig`;

/**
 * fadeInRightBig animation
 */
export const fadeInRightBig =
  createMotionFromAnimate<fadeInRightBigMotionOptions>(
    keyframes([
      style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)', offset: 0 }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeInRightBig` animation
 */
export const setFadeInRightBigDefaults =
  setDefaults<fadeInRightBigMotionOptions>(defaults);

/**
 * fadeInRightBig animation on :enter
 * @remarks triggerName: `fadeInRightBigOnEnter`
 */
export const fadeInRightBigOnEnter = createOnEnter(
  fadeInRightBig,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInRightBig animation on :incr
 * @remarks triggerName: `fadeInRightBigOnIncr`
 */
export const fadeInRightBigOnIncr = createOnIncr(
  fadeInRightBig,
  name,
  defaults,
  getAnimatecssDefaults()
);
