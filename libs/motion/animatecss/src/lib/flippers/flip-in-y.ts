/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/flipInY.css
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

type flipInYMotionOptions = MotionOptions;

const defaults = createDefaults<flipInYMotionOptions>();
const name = `flipInY`;

/**
 * flipInY animation
 */
export const flipInY = createMotionFromAnimate<flipInYMotionOptions>(
  keyframes([
    style({
      visibility: 'visible',
      transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
      opacity: 0,
      easing: 'ease-in',
      offset: 0,
    }),
    style({
      transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
      opacity: 0.5,
      easing: 'ease-in',
      offset: 0.4,
    }),
    style({
      transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
      opacity: 1,
      easing: 'ease-in',
      offset: 0.6,
    }),
    style({
      transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
      easing: 'ease',
      offset: 0.8,
    }),
    style({ transform: 'perspective(400px)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `flipInY` animation
 */
export const setFlipInYDefaults = setDefaults<flipInYMotionOptions>(defaults);

/**
 * flipInY animation on :enter
 * @remarks triggerName: `flipInYOnEnter`
 */
export const flipInYOnEnter = createOnEnter(
  flipInY,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flipInY animation on :incr
 * @remarks triggerName: `flipInYOnIncr`
 */
export const flipInYOnIncr = createOnIncr(
  flipInY,
  name,
  defaults,
  getAnimatecssDefaults()
);
