/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_exits/rotateOutDownLeft.css
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

type rotateOutDownLeftMotionOptions = MotionOptions;

const defaults = createDefaults<rotateOutDownLeftMotionOptions>();

const name = `rotateOutDownLeft`;

/**
 * rotateOutDownLeft animation
 */
export const rotateOutDownLeft =
  createMotionFromAnimate<rotateOutDownLeftMotionOptions>(
    keyframes([
      style({
        'transform-origin': 'left bottom',
        opacity: 1,
        easing: 'ease',
        offset: 0,
      }),
      style({
        opacity: 0,
        transform: 'rotate3d(0, 0, 1, 45deg)',
        easing: 'ease',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `rotateOutDownLeft` animation
 */
export const setRotateOutDownLeftDefaults =
  setDefaults<rotateOutDownLeftMotionOptions>(defaults);

/**
 * rotateOutDownLeft animation on :enter
 * @remarks triggerName: `rotateOutDownLeftOnLeave`
 */
export const rotateOutDownLeftOnLeave = createOnLeave(
  rotateOutDownLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateOutDownLeft animation on :decr
 * @remarks triggerName: `rotateOutDownLeftOnDecr`
 */
export const rotateOutDownLeftOnDecr = createOnDecr(
  rotateOutDownLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
