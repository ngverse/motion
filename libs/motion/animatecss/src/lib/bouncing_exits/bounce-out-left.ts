/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_exits/bounceOutLeft.css
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

type bounceOutLeftMotionOptions = MotionOptions;

const defaults = createDefaults<bounceOutLeftMotionOptions>();

const name = `bounceOutLeft`;

/**
 * bounceOutLeft animation
 */
export const bounceOutLeft =
  createMotionFromAnimate<bounceOutLeftMotionOptions>(
    keyframes([
      style({
        opacity: 1,
        transform: 'translate3d(20px, 0, 0) scaleX(0.9)',
        offset: 0.2,
      }),
      style({
        opacity: 0,
        transform: 'translate3d(-2000px, 0, 0) scaleX(2)',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `bounceOutLeft` animation
 */
export const setBounceOutLeftDefaults =
  setDefaults<bounceOutLeftMotionOptions>(defaults);

/**
 * bounceOutLeft animation on :enter
 * @remarks triggerName: `bounceOutLeftOnLeave`
 */
export const bounceOutLeftOnLeave = createOnLeave(
  bounceOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceOutLeft animation on :decr
 * @remarks triggerName: `bounceOutLeftOnDecr`
 */
export const bounceOutLeftOnDecr = createOnDecr(
  bounceOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
