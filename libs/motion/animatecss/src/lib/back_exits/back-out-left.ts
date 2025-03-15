/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/back_exits/backOutLeft.css
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

type backOutLeftMotionOptions = MotionOptions;

const defaults = createDefaults<backOutLeftMotionOptions>();

const name = `backOutLeft`;

/**
 * backOutLeft animation
 */
export const backOutLeft = createMotionFromAnimate<backOutLeftMotionOptions>(
  keyframes([
    style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
    style({
      transform: 'translateX(0px) scale(0.7)',
      opacity: 0.7,
      offset: 0.2,
    }),
    style({
      transform: 'translateX(-2000px) scale(0.7)',
      opacity: 0.7,
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `backOutLeft` animation
 */
export const setBackOutLeftDefaults =
  setDefaults<backOutLeftMotionOptions>(defaults);

/**
 * backOutLeft animation on :enter
 * @remarks triggerName: `backOutLeftOnLeave`
 */
export const backOutLeftOnLeave = createOnLeave(
  backOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * backOutLeft animation on :decr
 * @remarks triggerName: `backOutLeftOnDecr`
 */
export const backOutLeftOnDecr = createOnDecr(
  backOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
