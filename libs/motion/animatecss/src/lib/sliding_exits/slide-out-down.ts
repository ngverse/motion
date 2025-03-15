/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/sliding_exits/slideOutDown.css
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

type slideOutDownMotionOptions = MotionOptions;

const defaults = createDefaults<slideOutDownMotionOptions>();

const name = `slideOutDown`;

/**
 * slideOutDown animation
 */
export const slideOutDown = createMotionFromAnimate<slideOutDownMotionOptions>(
  keyframes([
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
    style({
      transform: 'translate3d(0, 100%, 0)',
      visibility: 'hidden',
      easing: 'ease',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `slideOutDown` animation
 */
export const setslideOutDownDefaults =
  setDefaults<slideOutDownMotionOptions>(defaults);

/**
 * slideOutDown animation on :enter
 * @remarks triggerName: `slideOutDownOnLeave`
 */
export const slideOutDownOnLeave = createOnLeave(
  slideOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * slideOutDown animation on :decr
 * @remarks triggerName: `slideOutDownOnDecr`
 */
export const slideOutDownOnDecr = createOnDecr(
  slideOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);
