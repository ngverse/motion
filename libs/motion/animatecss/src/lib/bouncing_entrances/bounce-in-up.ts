/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_entrances/bounceInUp.css
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

type bounceInUpMotionOptions = MotionOptions;

const defaults = createDefaults<bounceInUpMotionOptions>();

const name = `bounceInUp`;

/**
 * bounceInUp animation
 */
export const bounceInUp = createMotionFromAnimate<bounceInUpMotionOptions>(
  keyframes([
    style({
      opacity: 0,
      transform: 'translate3d(0, 3000px, 0) scaleY(5)',
      offset: 0,
    }),
    style({
      opacity: 1,
      transform: 'translate3d(0, -20px, 0) scaleY(0.9)',
      offset: 0.6,
    }),
    style({ transform: 'translate3d(0, 10px, 0) scaleY(0.95)', offset: 0.75 }),
    style({ transform: 'translate3d(0, -5px, 0) scaleY(0.985)', offset: 0.9 }),
    style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `bounceInUp` animation
 */
export const setBounceInUpDefaults =
  setDefaults<bounceInUpMotionOptions>(defaults);

/**
 * bounceInUp animation on :enter
 * @remarks triggerName: `bounceInUpOnEnter`
 */
export const bounceInUpOnEnter = createOnEnter(
  bounceInUp,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceInUp animation on :incr
 * @remarks triggerName: `bounceInUpOnIncr`
 */
export const bounceInUpOnIncr = createOnIncr(
  bounceInUp,
  name,
  defaults,
  getAnimatecssDefaults()
);
