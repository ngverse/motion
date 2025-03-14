/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/flip.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnEnter,
  createOnIncr,
  createOnLeave,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type flipMotionOptions = MotionOptions;

const defaults = createDefaults<flipMotionOptions>();
const name = `flip`;

/**
 * flip animation
 */
export const flip = createMotionFromAnimate<flipMotionOptions>(
  keyframes([
    style({
      transform:
        'perspective(400px) scale3d(1, 1, 1) rotate3d(0, 1, 0, -360deg)',
      offset: 0,
      easing: 'ease-out',
    }),
    style({
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
      offset: 0.4,
      easing: 'ease-out',
    }),
    style({
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
      offset: 0.5,
      easing: 'ease-in',
    }),
    style({
      transform:
        'perspective(400px) scale3d(0.95, 0.95, 0.95) rotate3d(0, 1, 0, 0deg)',
      offset: 0.8,
      easing: 'ease-in',
    }),
    style({
      transform: 'perspective(400px) scale3d(1, 1, 1) rotate3d(0, 1, 0, 0deg)',
      offset: 1,
      easing: 'ease-in',
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `flip` animation
 */
export const setFlipDefaults = setDefaults<flipMotionOptions>(defaults);

/**
 * flip animation on :enter
 * @remarks triggerName: `flipOnEnter`
 */
export const flipOnEnter = createOnEnter(
  flip,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flip animation on :leave
 * @remarks triggerName: `flipOnLeave`
 */
export const flipOnLeave = createOnLeave(
  flip,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flip animation on :incr
 * @remarks triggerName: `flipOnIncr`
 */
export const flipOnIncr = createOnIncr(
  flip,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flip animation on :decr
 * @remarks triggerName: `flipOnDecr`
 */
export const flipOnDecr = createOnDecr(
  flip,
  name,
  defaults,
  getAnimatecssDefaults()
);
