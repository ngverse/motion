/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_exits/rotateOutDownRight.css
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

type rotateOutDownRightMotionOptions = MotionOptions;

const defaults = createDefaults<rotateOutDownRightMotionOptions>();

const name = `rotateOutDownRight`;

/**
 * rotateOutDownRight animation
 */
export const rotateOutDownRight =
  createMotionFromAnimate<rotateOutDownRightMotionOptions>(
    keyframes([
      style({
        'transform-origin': 'right bottom',
        opacity: 1,
        easing: 'ease',
        offset: 0,
      }),
      style({
        opacity: 0,
        transform: 'rotate3d(0, 0, 1, -45deg)',
        easing: 'ease',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `rotateOutDownRight` animation
 */
export const setRotateOutDownRightDefaults =
  setDefaults<rotateOutDownRightMotionOptions>(defaults);

/**
 * rotateOutDownRight animation on :enter
 * @remarks triggerName: `rotateOutDownRightOnLeave`
 */
export const rotateOutDownRightOnLeave = createOnLeave(
  rotateOutDownRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateOutDownRight animation on :decr
 * @remarks triggerName: `rotateOutDownRightOnDecr`
 */
export const rotateOutDownRightOnDecr = createOnDecr(
  rotateOutDownRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
