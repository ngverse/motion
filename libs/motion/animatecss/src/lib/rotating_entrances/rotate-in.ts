/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/rotating_entrances/rotateIn.css
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

type rotateInMotionOptions = MotionOptions;

const defaults = createDefaults<rotateInMotionOptions>();

const name = `rotateIn`;

/**
 * rotateIn animation
 */
export const rotateIn = createMotionFromAnimate<rotateInMotionOptions>(
  keyframes([
    style({ transform: 'rotate3d(0, 0, 1, -200deg)', opacity: 0, offset: 0 }),
    style({ transform: 'translate3d(0, 0, 0)', opacity: 1, offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `rotateIn` animation
 */
export const setRotateInDefaults = setDefaults<rotateInMotionOptions>(defaults);

/**
 * rotateIn animation on :enter
 * @remarks triggerName: `rotateInOnEnter`
 */
export const rotateInOnEnter = createOnEnter(
  rotateIn,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rotateIn animation on :incr
 * @remarks triggerName: `rotateInOnIncr`
 */
export const rotateInOnIncr = createOnIncr(
  rotateIn,
  name,
  defaults,
  getAnimatecssDefaults()
);
