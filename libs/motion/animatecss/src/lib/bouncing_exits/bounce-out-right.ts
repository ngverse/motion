/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_exits/bounceOutRight.css
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

type bounceOutRightMotionOptions = MotionOptions;

const defaults = createDefaults<bounceOutRightMotionOptions>();

const name = `bounceOutRight`;

/**
 * bounceOutRight animation
 */
export const bounceOutRight =
  createMotionFromAnimate<bounceOutRightMotionOptions>(
    keyframes([
      style({
        opacity: 1,
        transform: 'translate3d(-20px, 0, 0) scaleX(0.9)',
        offset: 0.2,
      }),
      style({
        opacity: 0,
        transform: 'translate3d(2000px, 0, 0) scaleX(2)',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `bounceOutRight` animation
 */
export const setBounceOutRightDefaults =
  setDefaults<bounceOutRightMotionOptions>(defaults);

/**
 * bounceOutRight animation on :enter
 * @remarks triggerName: `bounceOutRightOnLeave`
 */
export const bounceOutRightOnLeave = createOnLeave(
  bounceOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceOutRight animation on :decr
 * @remarks triggerName: `bounceOutRightOnDecr`
 */
export const bounceOutRightOnDecr = createOnDecr(
  bounceOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
