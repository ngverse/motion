/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_entrances/rotateInDownRight.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnEnter,
  createOnIncr,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type rotateInDownRightMotionOptions = MotionOptions;

const defaults = createDefaults<rotateInDownRightMotionOptions>();

const name = `rotateInDownRight`;

/**
 * rotateInDownRight animation
 */
export const rotateInDownRight =
  createMotionFromAnimate<rotateInDownRightMotionOptions>(
    keyframes([
      style({
        'transform-origin': 'right bottom',
        visibility: 'visible',
        opacity: 0,
        transform: 'rotate3d(0, 0, 1, 45deg)',
        easing: 'ease',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'rotate3d(0, 0, 1, 0deg)',
        easing: 'ease',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `rotateInDownRight` animation
 */
export const setRotateInDownRightDefaults =
  setDefaults<rotateInDownRightMotionOptions>(defaults);

/**
 * rotateInDownRight animation on :enter
 * @remarks triggerName: `rotateInDownRightOnEnter`
 */
export const rotateInDownRightOnEnter = createOnEnter(
  rotateInDownRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateInDownRight animation on :incr
 * @remarks triggerName: `rotateInDownRightOnIncr`
 */
export const rotateInDownRightOnIncr = createOnIncr(
  rotateInDownRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
