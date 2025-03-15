/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_exits/bounceOutDown.css
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

type bounceOutDownMotionOptions = MotionOptions;

const defaults = createDefaults<bounceOutDownMotionOptions>();

const name = `bounceOutDown`;

/**
 * bounceOutDown animation
 */
export const bounceOutDown =
  createMotionFromAnimate<bounceOutDownMotionOptions>(
    keyframes([
      style({
        transform: 'translate3d(0, 10px, 0) scaleY(0.985)',
        offset: 0.2,
      }),
      style({
        opacity: 1,
        transform: 'translate3d(0, -20px, 0) scaleY(0.9)',
        offset: 0.4,
      }),
      style({
        opacity: 1,
        transform: 'translate3d(0, -20px, 0) scaleY(0.9)',
        offset: 0.45,
      }),
      style({
        opacity: 0,
        transform: 'translate3d(0, 2000px, 0) scaleY(3)',
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `bounceOutDown` animation
 */
export const setBounceOutDownDefaults =
  setDefaults<bounceOutDownMotionOptions>(defaults);

/**
 * bounceOutDown animation on :enter
 * @remarks triggerName: `bounceOutDownOnLeave`
 */
export const bounceOutDownOnLeave = createOnLeave(
  bounceOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceOutDown animation on :decr
 * @remarks triggerName: `bounceOutDownOnDecr`
 */
export const bounceOutDownOnDecr = createOnDecr(
  bounceOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);
