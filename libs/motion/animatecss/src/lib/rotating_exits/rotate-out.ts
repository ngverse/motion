/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_exits/rotateOut.css
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

type rotateOutMotionOptions = MotionOptions;

const defaults = createDefaults<rotateOutMotionOptions>();

const name = `rotateOut`;

/**
 * rotateOut animation
 */
export const rotateOut = createMotionFromAnimate<rotateOutMotionOptions>(
  keyframes([
    style({
      'transform-origin': 'center',
      opacity: 1,
      easing: 'ease',
      offset: 0,
    }),
    style({
      opacity: 0,
      transform: 'rotate(200deg)',
      easing: 'ease',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `rotateOut` animation
 */
export const setRotateOutDefaults =
  setDefaults<rotateOutMotionOptions>(defaults);

/**
 * rotateOut animation on :enter
 * @remarks triggerName: `rotateOutOnLeave`
 */
export const rotateOutOnLeave = createOnLeave(
  rotateOut,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateOut animation on :decr
 * @remarks triggerName: `rotateOutOnDecr`
 */
export const rotateOutOnDecr = createOnDecr(
  rotateOut,
  name,
  defaults,
  getAnimatecssDefaults()
);
