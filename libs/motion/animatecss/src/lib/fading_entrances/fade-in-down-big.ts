/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInDownBig.css
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

type fadeInDownBigMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInDownBigMotionOptions>();

const name = `fadeInDownBig`;

/**
 * fadeInDownBig animation
 */
export const fadeInDownBig =
  createMotionFromAnimate<fadeInDownBigMotionOptions>(
    keyframes([
      style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)', offset: 0 }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeInDownBig` animation
 */
export const setFadeInDownBigDefaults =
  setDefaults<fadeInDownBigMotionOptions>(defaults);

/**
 * fadeInDownBig animation on :enter
 * @remarks triggerName: `fadeInDownBigOnEnter`
 */
export const fadeInDownBigOnEnter = createOnEnter(
  fadeInDownBig,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInDownBig animation on :incr
 * @remarks triggerName: `fadeInDownBigOnIncr`
 */
export const fadeInDownBigOnIncr = createOnIncr(
  fadeInDownBig,
  name,
  defaults,
  getAnimatecssDefaults()
);
