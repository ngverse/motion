/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/flipOutX.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnLeave,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type flipOutXMotionOptions = MotionOptions;

const defaults = createDefaults<flipOutXMotionOptions>();
const name = `flipOutX`;

/**
 * flipOutX animation
 */
export const flipOutX = createMotionFromAnimate<flipOutXMotionOptions>(
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
 * sets default values for the `flipOutX` animation
 */
export const setFlipOutXDefaults = setDefaults<flipOutXMotionOptions>(defaults);

/**
 * flipOutX animation on :leave
 * @remarks triggerName: `flipOutXOnLeave`
 */
export const flipOutXOnLeave = createOnLeave(
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
