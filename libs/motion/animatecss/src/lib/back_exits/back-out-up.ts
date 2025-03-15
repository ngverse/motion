/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/back_exits/backOutUp.css
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

type backOutUpMotionOptions = MotionOptions;

const defaults = createDefaults<backOutUpMotionOptions>();

const name = `backOutUp`;

/**
 * backOutUp animation
 */
export const backOutUp = createMotionFromAnimate<backOutUpMotionOptions>(
  keyframes([
    style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
    style({
      transform: 'translateY(0px) scale(0.7)',
      opacity: 0.7,
      offset: 0.2,
    }),
    style({
      transform: 'translateY(-700px) scale(0.7)',
      opacity: 0.7,
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `backOutUp` animation
 */
export const setBackOutUpDefaults =
  setDefaults<backOutUpMotionOptions>(defaults);

/**
 * backOutUp animation on :enter
 * @remarks triggerName: `backOutUpOnLeave`
 */
export const backOutUpOnLeave = createOnLeave(
  backOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * backOutUp animation on :decr
 * @remarks triggerName: `backOutUpOnDecr`
 */
export const backOutUpOnDecr = createOnDecr(
  backOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);
