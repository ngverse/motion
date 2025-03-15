/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_entrances/rotateInUpLeft.css
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

type rotateInUpLeftMotionOptions = MotionOptions;

const defaults = createDefaults<rotateInUpLeftMotionOptions>();

const name = `rotateInUpLeft`;

/**
 * rotateInUpLeft animation
 */
export const rotateInUpLeft =
  createMotionFromAnimate<rotateInUpLeftMotionOptions>(
    keyframes([
      style({
        'transform-origin': 'left bottom',
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
 * sets default values for the `rotateInUpLeft` animation
 */
export const setRotateInUpLeftDefaults =
  setDefaults<rotateInUpLeftMotionOptions>(defaults);

/**
 * rotateInUpLeft animation on :enter
 * @remarks triggerName: `rotateInUpLeftOnEnter`
 */
export const rotateInUpLeftOnEnter = createOnEnter(
  rotateInUpLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateInUpLeft animation on :incr
 * @remarks triggerName: `rotateInUpLeftOnIncr`
 */
export const rotateInUpLeftOnIncr = createOnIncr(
  rotateInUpLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
