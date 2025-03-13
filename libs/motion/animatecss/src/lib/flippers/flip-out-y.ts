/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/flipOutY.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnEnter,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

const defaults = createDefaults();
const name = `flipOutY`;

/**
 * flipOutY animation
 */
export const flipOutY = createMotionFromAnimate(
  keyframes([
    style({
      transform: 'perspective(400px)',
      opacity: 1,
      easing: 'ease',
      offset: 0,
    }),
    style({
      transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
      opacity: 1,
      easing: 'ease',
      offset: 0.3,
    }),
    style({
      transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
      opacity: 0,
      easing: 'ease',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipOutY animation on :enter
 * @remarks triggerName: `flipOutYOnEnter`
 */
export const flipOutYOnEnter = createOnEnter(
  flipOutY,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipOutY animation on :decr
 * @remarks triggerName: `flipOutYOnDecr`
 */
export const flipOutYOnDecr = createOnDecr(
  flipOutY,
  name,
  defaults,
  getAnimatecssDefaults()
);
