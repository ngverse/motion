/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/flipOutX.css
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
const name = `flipOutX`;

/**
 * flipOutX animation
 */
export const flipOutX = createMotionFromAnimate(
  keyframes([
    style({
      transform: 'perspective(400px)',
      opacity: 1,
      easing: 'ease',
      offset: 0,
    }),
    style({
      transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
      opacity: 1,
      easing: 'ease',
      offset: 0.3,
    }),
    style({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
      opacity: 0,
      easing: 'ease',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipOutX animation on :enter
 * @remarks triggerName: `flipOutXOnEnter`
 */
export const flipOutXOnEnter = createOnEnter(
  flipOutX,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipOutX animation on :decr
 * @remarks triggerName: `flipOutXOnDecr`
 */
export const flipOutXOnDecr = createOnDecr(
  flipOutX,
  name,
  defaults,
  getAnimatecssDefaults()
);
