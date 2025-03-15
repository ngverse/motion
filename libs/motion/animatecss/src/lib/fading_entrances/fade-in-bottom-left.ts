/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInBottomLeft.css
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

type fadeInBottomLeftMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInBottomLeftMotionOptions>();

const name = `fadeInBottomLeft`;

/**
 * fadeInBottomLeft animation
 */
export const fadeInBottomLeft =
  createMotionFromAnimate<fadeInBottomLeftMotionOptions>(
    keyframes([
      style({
        opacity: 0,
        transform: 'translate3d(-100%, 100%, 0)',
        offset: 0,
      }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeInBottomLeft` animation
 */
export const setFadeInBottomLeftDefaults =
  setDefaults<fadeInBottomLeftMotionOptions>(defaults);

/**
 * fadeInBottomLeft animation on :enter
 * @remarks triggerName: `fadeInBottomLeftOnEnter`
 */
export const fadeInBottomLeftOnEnter = createOnEnter(
  fadeInBottomLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInBottomLeft animation on :incr
 * @remarks triggerName: `fadeInBottomLeftOnIncr`
 */
export const fadeInBottomLeftOnIncr = createOnIncr(
  fadeInBottomLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
