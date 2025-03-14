/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/flipInX.css
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

type flipInXMotionOptions = MotionOptions;

const defaults = createDefaults<flipInXMotionOptions>();
const name = `flipInX`;

/**
 * flipInX animation
 */
export const flipInX = createMotionFromAnimate<flipInXMotionOptions>(
  keyframes([
    style({
      visibility: 'visible',
      transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
      opacity: 0,
      easing: 'ease-in',
      offset: 0,
    }),
    style({
      transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
      opacity: 0.5,
      easing: 'ease-in',
      offset: 0.4,
    }),
    style({
      transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
      opacity: 1,
      easing: 'ease-in',
      offset: 0.6,
    }),
    style({
      transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
      easing: 'ease',
      offset: 0.8,
    }),
    style({ transform: 'perspective(400px)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `flipInX` animation
 */
export const setFlipInXDefaults = setDefaults<flipInXMotionOptions>(defaults);

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
 * flipInX animation on :incr
 * @remarks triggerName: `flipInXOnIncr`
 */
export const flipInXOnIncr = createOnIncr(
  flipInX,
  name,
  defaults,
  getAnimatecssDefaults()
);
