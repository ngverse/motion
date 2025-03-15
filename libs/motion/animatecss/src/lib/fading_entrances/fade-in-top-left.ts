/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInTopLeft.css
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

type fadeInTopLeftMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInTopLeftMotionOptions>();

const name = `fadeInTopLeft`;

/**
 * fadeInTopLeft animation
 */
export const fadeInTopLeft =
  createMotionFromAnimate<fadeInTopLeftMotionOptions>(
    keyframes([
      style({
        opacity: 0,
        transform: 'translate3d(-100%, -100%, 0)',
        offset: 0,
      }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeInTopLeft` animation
 */
export const setFadeInTopLeftDefaults =
  setDefaults<fadeInTopLeftMotionOptions>(defaults);

/**
 * fadeInTopLeft animation on :enter
 * @remarks triggerName: `fadeInTopLeftOnEnter`
 */
export const fadeInTopLeftOnEnter = createOnEnter(
  fadeInTopLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInTopLeft animation on :incr
 * @remarks triggerName: `fadeInTopLeftOnIncr`
 */
export const fadeInTopLeftOnIncr = createOnIncr(
  fadeInTopLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
