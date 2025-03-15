/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/sliding_exits/slideOutUp.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnLeave,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type slideOutUpMotionOptions = MotionOptions;

const defaults = createDefaults<slideOutUpMotionOptions>();

const name = `slideOutUp`;

/**
 * slideOutUp animation
 */
export const slideOutUp = createMotionFromAnimate<slideOutUpMotionOptions>(
  keyframes([
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
    style({
      transform: 'translate3d(0, -100%, 0)',
      visibility: 'hidden',
      easing: 'ease',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `slideOutUp` animation
 */
export const setSlideOutUpDefaults =
  setDefaults<slideOutUpMotionOptions>(defaults);

/**
 * slideOutUp animation on :enter
 * @remarks triggerName: `slideOutUpOnLeave`
 */
export const slideOutUpOnLeave = createOnLeave(
  slideOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * slideOutUp animation on :decr
 * @remarks triggerName: `slideOutUpOnDecr`
 */
export const slideOutUpOnDecr = createOnDecr(
  slideOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);
