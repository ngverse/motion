/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/sliding_entrances/slideInUp.css
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

type slideInUpMotionOptions = MotionOptions;

const defaults = createDefaults<slideInUpMotionOptions>();

const name = `slideInUp`;

/**
 * slideInUp animation
 */
export const slideInUp = createMotionFromAnimate<slideInUpMotionOptions>(
  keyframes([
    style({
      visibility: 'visible',
      transform: 'translate3d(0, 100%, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `slideInUp` animation
 */
export const setSlideInUpDefaults =
  setDefaults<slideInUpMotionOptions>(defaults);

/**
 * slideInUp animation on :enter
 * @remarks triggerName: `slideInUpOnEnter`
 */
export const slideInUpOnEnter = createOnEnter(
  slideInUp,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * slideInUp animation on :incr
 * @remarks triggerName: `slideInUpOnIncr`
 */
export const slideInUpOnIncr = createOnIncr(
  slideInUp,
  name,
  defaults,
  getAnimatecssDefaults()
);
