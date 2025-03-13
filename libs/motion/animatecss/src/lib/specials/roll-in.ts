/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/rollIn.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnEnter,
  createOnIncr,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

const defaults = createDefaults();
const name = `rollIn`;

/**
 * rollIn animation
 */
export const rollIn = createMotionFromAnimate(
  keyframes([
    style({
      visibilityroll: 'visible',
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
      offset: 0,
    }),
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * rollIn animation on :enter
 * @remarks triggerName: `rollInOnEnter`
 */
export const rollInOnEnter = createOnEnter(
  rollIn,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rollIn animation on :incr
 * @remarks triggerName: `rollInOnIncr`
 */
export const rollInOnIncr = createOnIncr(
  rollIn,
  name,
  defaults,
  getAnimatecssDefaults()
);
