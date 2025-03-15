/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_exits/bounceOutUp.css
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

type bounceOutUpMotionOptions = MotionOptions;

const defaults = createDefaults<bounceOutUpMotionOptions>();

const name = `bounceOutUp`;

/**
 * bounceOutUp animation
 */
export const bounceOutUp = createMotionFromAnimate<bounceOutUpMotionOptions>(
  keyframes([
    style({ transform: 'translate3d(0, -10px, 0) scaleY(0.985)', offset: 0.2 }),
    style({
      opacity: 1,
      transform: 'translate3d(0, 20px, 0) scaleY(0.9)',
      offset: 0.4,
    }),
    style({
      opacity: 1,
      transform: 'translate3d(0, 20px, 0) scaleY(0.9)',
      offset: 0.45,
    }),
    style({
      opacity: 0,
      transform: 'translate3d(0, -2000px, 0) scaleY(3)',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `bounceOutUp` animation
 */
export const setBounceOutUpDefaults =
  setDefaults<bounceOutUpMotionOptions>(defaults);

/**
 * bounceOutUp animation on :enter
 * @remarks triggerName: `bounceOutUpOnLeave`
 */
export const bounceOutUpOnLeave = createOnLeave(
  bounceOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceOutUp animation on :decr
 * @remarks triggerName: `bounceOutUpOnDecr`
 */
export const bounceOutUpOnDecr = createOnDecr(
  bounceOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);
