/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/sliding_entrances/slideInLeft.css
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

type slideInLeftMotionOptions = MotionOptions;

const defaults = createDefaults<slideInLeftMotionOptions>();

const name = `slideInLeft`;

/**
 * slideInLeft animation
 */
export const slideInLeft = createMotionFromAnimate<slideInLeftMotionOptions>(
  keyframes([
    style({
      visibility: 'visible',
      transform: 'translate3d(-100%, 0, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `slideInLeft` animation
 */
export const setSlideInLeftDefaults =
  setDefaults<slideInLeftMotionOptions>(defaults);

/**
 * slideInLeft animation on :enter
 * @remarks triggerName: `slideInLeftOnEnter`
 */
export const slideInLeftOnEnter = createOnEnter(
  slideInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * slideInLeft animation on :incr
 * @remarks triggerName: `slideInLeftOnIncr`
 */
export const slideInLeftOnIncr = createOnIncr(
  slideInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
