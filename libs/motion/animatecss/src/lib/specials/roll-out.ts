/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/rollOut.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnLeave,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

const defaults = createDefaults();
const name = `rollOut`;

/**
 * rollOut animation
 */
export const rollOut = createMotionFromAnimate(
  keyframes([
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)',
      easing: 'ease',
      offset: 0,
    }),
    style({
      opacity: 0,
      transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
      easing: 'ease',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * rollOut animation on :enter
 * @remarks triggerName: `rollOutOnLeave`
 */
export const rollOutOnLeave = createOnLeave(
  rollOut,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rollOut animation on :decr
 * @remarks triggerName: `rollOutOnDecr`
 */
export const rollOutOnDecr = createOnDecr(
  rollOut,
  name,
  defaults,
  getAnimatecssDefaults()
);
