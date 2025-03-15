/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_exits/bounceOut.css
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

type bounceOutMotionOptions = MotionOptions;

const defaults = createDefaults<bounceOutMotionOptions>();

const name = `bounceOut`;

/**
 * bounceOut animation
 */
export const bounceOut = createMotionFromAnimate<bounceOutMotionOptions>(
  keyframes([
    style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.2 }),
    style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }),
    style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.55 }),
    style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `bounceOut` animation
 */
export const setBounceOutDefaults =
  setDefaults<bounceOutMotionOptions>(defaults);

/**
 * bounceOut animation on :enter
 * @remarks triggerName: `bounceOutOnLeave`
 */
export const bounceOutOnLeave = createOnLeave(
  bounceOut,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceOut animation on :decr
 * @remarks triggerName: `bounceOutOnDecr`
 */
export const bounceOutOnDecr = createOnDecr(
  bounceOut,
  name,
  defaults,
  getAnimatecssDefaults()
);
