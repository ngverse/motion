/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/back_exits/backOutDown.css
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

type backOutDownMotionOptions = MotionOptions;

const defaults = createDefaults<backOutDownMotionOptions>();

const name = `backOutDown`;

/**
 * backOutDown animation
 */
export const backOutDown = createMotionFromAnimate<backOutDownMotionOptions>(
  keyframes([
    style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
    style({
      transform: 'translateY(0px) scale(0.7)',
      opacity: 0.7,
      offset: 0.2,
    }),
    style({
      transform: 'translateY(700px) scale(0.7)',
      opacity: 0.7,
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `backOutDown` animation
 */
export const setBackOutDownDefaults =
  setDefaults<backOutDownMotionOptions>(defaults);

/**
 * backOutDown animation on :enter
 * @remarks triggerName: `backOutDownOnLeave`
 */
export const backOutDownOnLeave = createOnLeave(
  backOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * backOutDown animation on :decr
 * @remarks triggerName: `backOutDownOnDecr`
 */
export const backOutDownOnDecr = createOnDecr(
  backOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);
