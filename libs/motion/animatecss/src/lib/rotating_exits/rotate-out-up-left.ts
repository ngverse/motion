/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_exits/rotateOutUpLeft.css
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

type rotateOutUpLeftMotionOptions = MotionOptions;

const defaults = createDefaults<rotateOutUpLeftMotionOptions>();

const name = `rotateOutUpLeft`;

/**
 * rotateOutUpLeft animation
 */
export const rotateOutUpLeft =
  createMotionFromAnimate<rotateOutUpLeftMotionOptions>(
    keyframes([
      style({
        'transform-origin': 'left bottom',
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
 * sets default values for the `rotateOutUpLeft` animation
 */
export const setRotateOutUpLeftDefaults =
  setDefaults<rotateOutUpLeftMotionOptions>(defaults);

/**
 * rotateOutUpLeft animation on :enter
 * @remarks triggerName: `rotateOutUpLeftOnLeave`
 */
export const rotateOutUpLeftOnLeave = createOnLeave(
  rotateOutUpLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateOutUpLeft animation on :decr
 * @remarks triggerName: `rotateOutUpLeftOnDecr`
 */
export const rotateOutUpLeftOnDecr = createOnDecr(
  rotateOutUpLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
