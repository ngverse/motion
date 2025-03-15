/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_entrances/rotateInUpRight.css
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

type rotateInUpRightMotionOptions = MotionOptions;

const defaults = createDefaults<rotateInUpRightMotionOptions>();

const name = `rotateInUpRight`;

/**
 * rotateInUpRight animation
 */
export const rotateInUpRight =
  createMotionFromAnimate<rotateInUpRightMotionOptions>(
    keyframes([
      style({
        'transform-origin': 'right bottom',
        visibility: 'visible',
        opacity: 0,
        transform: 'rotate3d(0, 0, 1, -90deg)',
        easing: 'ease',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        easing: 'ease',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `rotateInUpRight` animation
 */
export const setRotateInUpRightDefaults =
  setDefaults<rotateInUpRightMotionOptions>(defaults);

/**
 * rotateInUpRight animation on :enter
 * @remarks triggerName: `rotateInUpRightOnEnter`
 */
export const rotateInUpRightOnEnter = createOnEnter(
  rotateInUpRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateInUpRight animation on :incr
 * @remarks triggerName: `rotateInUpRightOnIncr`
 */
export const rotateInUpRightOnIncr = createOnIncr(
  rotateInUpRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
