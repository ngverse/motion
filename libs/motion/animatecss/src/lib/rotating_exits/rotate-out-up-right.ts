/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_exits/rotateOutUpRight.css
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

type rotateOutUpRightMotionOptions = MotionOptions;

const defaults = createDefaults<rotateOutUpRightMotionOptions>();

const name = `rotateOutUpRight`;

/**
 * rotateOutUpRight animation
 */
export const rotateOutUpRight =
  createMotionFromAnimate<rotateOutUpRightMotionOptions>(
    keyframes([
      style({
        'transform-origin': 'right bottom',
        opacity: 1,
        easing: 'ease',
        offset: 0,
      }),
      style({
        opacity: 0,
        transform: 'rotate3d(0, 0, 1, 90deg)',
        easing: 'ease',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `rotateOutUpRight` animation
 */
export const setRotateOutUpRightDefaults =
  setDefaults<rotateOutUpRightMotionOptions>(defaults);

/**
 * rotateOutUpRight animation on :enter
 * @remarks triggerName: `rotateOutUpRightOnLeave`
 */
export const rotateOutUpRightOnLeave = createOnLeave(
  rotateOutUpRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateOutUpRight animation on :decr
 * @remarks triggerName: `rotateOutUpRightOnDecr`
 */
export const rotateOutUpRightOnDecr = createOnDecr(
  rotateOutUpRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
