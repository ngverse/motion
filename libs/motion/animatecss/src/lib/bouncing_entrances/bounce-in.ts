/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_entrances/bounceIn.css
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

type bounceInMotionOptions = MotionOptions;

const defaults = createDefaults<bounceInMotionOptions>();

const name = `bounceIn`;

/**
 * bounceIn animation
 */
export const bounceIn = createMotionFromAnimate<bounceInMotionOptions>(
  keyframes([
    style({
      opacity: 0,
      transform: 'scale3d(0.3, 0.3, 0.3)',
      offset: 0,
    }),
    style({
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'scale3d(1.1, 1.1, 1.1)',
      offset: 0.2,
    }),
    style({
      transform: 'scale3d(0.9, 0.9, 0.9)',
      offset: 0.4,
    }),
    style({
      opacity: 1,
      transform: 'scale3d(1.03, 1.03, 1.03)',
      offset: 0.6,
    }),
    style({
      transform: 'scale3d(0.97, 0.97, 0.97)',
      offset: 0.8,
    }),
    style({
      opacity: 1,
      transform: 'scale3d(1, 1, 1)',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `bounceIn` animation
 */
export const setBounceInDefaults = setDefaults<bounceInMotionOptions>(defaults);

/**
 * bounceIn animation on :enter
 * @remarks triggerName: `bounceInOnEnter`
 */
export const bounceInOnEnter = createOnEnter(
  bounceIn,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceIn animation on :incr
 * @remarks triggerName: `bounceInOnIncr`
 */
export const bounceInOnIncr = createOnIncr(
  bounceIn,
  name,
  defaults,
  getAnimatecssDefaults()
);
