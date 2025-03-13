/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/flipInX.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnEnter,
  createOnIncr,
  createOnLeave,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

const defaults = createDefaults();
const name = `flipInX`;

/**
 * flipInX animation
 */
export const flipInX = createMotionFromAnimate(
  keyframes([
    style({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
      opacity: 0,
      offset: 0,
    }),
    style({
      transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
      offset: 0.4,
    }),
    style({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
      opacity: 1,
      offset: 0.6,
    }),
    style({
      transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
      offset: 0.8,
    }),
    style({
      transform: 'perspective(400px)',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipInX animation on :enter
 * @remarks triggerName: `flipInXOnEnter`
 */
export const flipInXOnEnter = createOnEnter(
  flipInX,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipInX animation on :leave
 * @remarks triggerName: `flipInXOnLeave`
 */
export const flipInXOnLeave = createOnLeave(
  flipInX,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipInX animation on :incr
 * @remarks triggerName: `flipInXOnIncr`
 */
export const flipInXOnIncr = createOnIncr(
  flipInX,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipInX animation on :decr
 * @remarks triggerName: `flipInXOnDecr`
 */
export const flipInXOnDecr = createOnDecr(
  flipInX,
  name,
  defaults,
  getAnimatecssDefaults()
);
