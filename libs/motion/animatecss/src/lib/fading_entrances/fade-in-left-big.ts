/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInLeftBig.css
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

type fadeInLeftBigMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInLeftBigMotionOptions>();

const name = `fadeInLeftBig`;

/**
 * fadeInLeftBig animation
 */
export const fadeInLeftBig =
  createMotionFromAnimate<fadeInLeftBigMotionOptions>(
    keyframes([
      style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 0 }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeInLeftBig` animation
 */
export const setFadeInLeftBigDefaults =
  setDefaults<fadeInLeftBigMotionOptions>(defaults);

/**
 * fadeInLeftBig animation on :enter
 * @remarks triggerName: `fadeInLeftBigOnEnter`
 */
export const fadeInLeftBigOnEnter = createOnEnter(
  fadeInLeftBig,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInLeftBig animation on :incr
 * @remarks triggerName: `fadeInLeftBigOnIncr`
 */
export const fadeInLeftBigOnIncr = createOnIncr(
  fadeInLeftBig,
  name,
  defaults,
  getAnimatecssDefaults()
);
