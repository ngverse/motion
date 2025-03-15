/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_entrances/bounceInLeft.css
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

type bounceInLeftMotionOptions = MotionOptions;

const defaults = createDefaults<bounceInLeftMotionOptions>();

const name = `bounceInLeft`;

/**
 * bounceInLeft animation
 */
export const bounceInLeft = createMotionFromAnimate<bounceInLeftMotionOptions>(
  keyframes([
    style({
      opacity: 0,
      transform: 'translate3d(-3000px, 0, 0) scaleX(3)',
      offset: 0,
    }),
    style({
      opacity: 1,
      transform: 'translate3d(25px, 0, 0) scaleX(1)',
      offset: 0.6,
    }),
    style({ transform: 'translate3d(-10px, 0, 0) scaleX(0.98)', offset: 0.75 }),
    style({ transform: 'translate3d(5px, 0, 0) scaleX(0.995)', offset: 0.9 }),
    style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `bounceInLeft` animation
 */
export const setBounceInLeftDefaults =
  setDefaults<bounceInLeftMotionOptions>(defaults);

/**
 * bounceInLeft animation on :enter
 * @remarks triggerName: `bounceInLeftOnEnter`
 */
export const bounceInLeftOnEnter = createOnEnter(
  bounceInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceInLeft animation on :incr
 * @remarks triggerName: `bounceInLeftOnIncr`
 */
export const bounceInLeftOnIncr = createOnIncr(
  bounceInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
