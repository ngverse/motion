/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/back_exits/backOutRight.css
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

type backOutRightMotionOptions = MotionOptions;

const defaults = createDefaults<backOutRightMotionOptions>();

const name = `backOutRight`;

/**
 * backOutRight animation
 */
export const backOutRight = createMotionFromAnimate<backOutRightMotionOptions>(
  keyframes([
    style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
    style({
      transform: 'translateX(0px) scale(0.7)',
      opacity: 0.7,
      offset: 0.2,
    }),
    style({
      transform: 'translateX(2000px) scale(0.7)',
      opacity: 0.7,
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `backOutRight` animation
 */
export const setBackOutRightDefaults =
  setDefaults<backOutRightMotionOptions>(defaults);

/**
 * backOutRight animation on :enter
 * @remarks triggerName: `backOutRightOnLeave`
 */
export const backOutRightOnLeave = createOnLeave(
  backOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * backOutRight animation on :decr
 * @remarks triggerName: `backOutRightOnDecr`
 */
export const backOutRightOnDecr = createOnDecr(
  backOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
