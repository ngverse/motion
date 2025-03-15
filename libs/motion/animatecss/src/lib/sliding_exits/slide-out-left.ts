/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/sliding_exits/slideOutLeft.css
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

type slideOutLeftMotionOptions = MotionOptions;

const defaults = createDefaults<slideOutLeftMotionOptions>();

const name = `slideOutLeft`;

/**
 * slideOutLeft animation
 */
export const slideOutLeft = createMotionFromAnimate<slideOutLeftMotionOptions>(
  keyframes([
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
    style({
      transform: 'translate3d(-100%, 0, 0)',
      visibility: 'hidden',
      easing: 'ease',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `slideOutLeft` animation
 */
export const setSlideOutLeftDefaults =
  setDefaults<slideOutLeftMotionOptions>(defaults);

/**
 * slideOutLeft animation on :enter
 * @remarks triggerName: `slideOutLeftOnLeave`
 */
export const slideOutLeftOnLeave = createOnLeave(
  slideOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * slideOutLeft animation on :decr
 * @remarks triggerName: `slideOutLeftOnDecr`
 */
export const slideOutLeftOnDecr = createOnDecr(
  slideOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
