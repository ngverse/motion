/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_entrances/bounceInRight.css
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

type bounceInRightMotionOptions = MotionOptions;

const defaults = createDefaults<bounceInRightMotionOptions>();

const name = `bounceInRight`;

/**
 * bounceInRight animation
 */
export const bounceInRight =
  createMotionFromAnimate<bounceInRightMotionOptions>(
    keyframes([
      style({
        opacity: 0,
        transform: 'translate3d(3000px, 0, 0) scaleX(3)',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'translate3d(-25px, 0, 0) scaleX(1)',
        offset: 0.6,
      }),
      style({
        transform: 'translate3d(10px, 0, 0) scaleX(0.98)',
        offset: 0.75,
      }),
      style({
        transform: 'translate3d(-5px, 0, 0) scaleX(0.995)',
        offset: 0.9,
      }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `bounceInRight` animation
 */
export const setBounceInRightDefaults =
  setDefaults<bounceInRightMotionOptions>(defaults);

/**
 * bounceInRight animation on :enter
 * @remarks triggerName: `bounceInRightOnEnter`
 */
export const bounceInRightOnEnter = createOnEnter(
  bounceInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceInRight animation on :incr
 * @remarks triggerName: `bounceInRightOnIncr`
 */
export const bounceInRightOnIncr = createOnIncr(
  bounceInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
