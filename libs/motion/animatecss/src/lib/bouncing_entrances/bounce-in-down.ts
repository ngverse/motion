/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/bouncing_entrances/bounceInDown.css
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

type bounceInDownMotionOptions = MotionOptions;

const defaults = createDefaults<bounceInDownMotionOptions>();

const name = `bounceInDown`;

/**
 * bounceInDown animation
 */
export const bounceInDown = createMotionFromAnimate<bounceInDownMotionOptions>(
  keyframes([
    style({
      opacity: 0,
      transform: 'translate3d(0, -3000px, 0) scaleY(3)',
      offset: 0,
    }),
    style({
      opacity: 1,
      transform: 'translate3d(0, 25px, 0) scaleY(0.9)',
      offset: 0.6,
    }),
    style({ transform: 'translate3d(0, -10px, 0) scaleY(0.95)', offset: 0.75 }),
    style({ transform: 'translate3d(0, 5px, 0) scaleY(0.985)', offset: 0.9 }),
    style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `bounceInDown` animation
 */
export const setBounceInDownDefaults =
  setDefaults<bounceInDownMotionOptions>(defaults);

/**
 * bounceInDown animation on :enter
 * @remarks triggerName: `bounceInDownOnEnter`
 */
export const bounceInDownOnEnter = createOnEnter(
  bounceInDown,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounceInDown animation on :incr
 * @remarks triggerName: `bounceInDownOnIncr`
 */
export const bounceInDownOnIncr = createOnIncr(
  bounceInDown,
  name,
  defaults,
  getAnimatecssDefaults()
);
