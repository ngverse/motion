/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/sliding_entrances/slideInRight.css
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

type slideInRightMotionOptions = MotionOptions;

const defaults = createDefaults<slideInRightMotionOptions>();

const name = `slideInRight`;

/**
 * slideInRight animation
 */
export const slideInRight = createMotionFromAnimate<slideInRightMotionOptions>(
  keyframes([
    style({
      visibility: 'visible',
      transform: 'translate3d(100%, 0, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `slideInRight` animation
 */
export const setSlideInRightDefaults =
  setDefaults<slideInRightMotionOptions>(defaults);

/**
 * slideInRight animation on :enter
 * @remarks triggerName: `slideInRightOnEnter`
 */
export const slideInRightOnEnter = createOnEnter(
  slideInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * slideInRight animation on :incr
 * @remarks triggerName: `slideInRightOnIncr`
 */
export const slideInRightOnIncr = createOnIncr(
  slideInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
