/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_entrances/rotateInDownLeft.css
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

type rotateInDownLeftMotionOptions = MotionOptions;

const defaults = createDefaults<rotateInDownLeftMotionOptions>();

const name = `rotateInDownLeft`;

/**
 * rotateInDownLeft animation
 */
export const rotateInDownLeft =
  createMotionFromAnimate<rotateInDownLeftMotionOptions>(
    keyframes([
      style({
        'transform-origin': 'left bottom',
        visibility: 'visible',
        opacity: 0,
        transform: 'rotate3d(0, 0, 1, -45deg)',
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
 * sets default values for the `rotateInDownLeft` animation
 */
export const setRotateInDownLeftDefaults =
  setDefaults<rotateInDownLeftMotionOptions>(defaults);

/**
 * rotateInDownLeft animation on :enter
 * @remarks triggerName: `rotateInDownLeftOnEnter`
 */
export const rotateInDownLeftOnEnter = createOnEnter(
  rotateInDownLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateInDownLeft animation on :incr
 * @remarks triggerName: `rotateInDownLeftOnIncr`
 */
export const rotateInDownLeftOnIncr = createOnIncr(
  rotateInDownLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
