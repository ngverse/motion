/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/sliding_exits/slideOutRight.css
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

type slideOutRightMotionOptions = MotionOptions;

const defaults = createDefaults<slideOutRightMotionOptions>();

const name = `slideOutRight`;

/**
 * slideOutRight animation
 */
export const slideOutRight =
  createMotionFromAnimate<slideOutRightMotionOptions>(
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
      style({
        transform: 'translate3d(100%, 0, 0)',
        visibility: 'hidden',
        easing: 'ease',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `slideOutRight` animation
 */
export const setSlideOutRightDefaults =
  setDefaults<slideOutRightMotionOptions>(defaults);

/**
 * slideOutRight animation on :enter
 * @remarks triggerName: `slideOutRightOnLeave`
 */
export const slideOutRightOnLeave = createOnLeave(
  slideOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * slideOutRight animation on :decr
 * @remarks triggerName: `slideOutRightOnDecr`
 */
export const slideOutRightOnDecr = createOnDecr(
  slideOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
