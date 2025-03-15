/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/sliding_entrances/slideInDown.css
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

type slideInDownMotionOptions = MotionOptions;

const defaults = createDefaults<slideInDownMotionOptions>();

const name = `slideInDown`;

/**
 * slideInDown animation
 */
export const slideInDown = createMotionFromAnimate<slideInDownMotionOptions>(
  keyframes([
    style({
      visibility: 'visible',
      transform: 'translate3d(0, -100%, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `slideInDown` animation
 */
export const setSlideInDownDefaults =
  setDefaults<slideInDownMotionOptions>(defaults);

/**
 * slideInDown animation on :enter
 * @remarks triggerName: `slideInDownOnEnter`
 */
export const slideInDownOnEnter = createOnEnter(
  slideInDown,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * slideInDown animation on :incr
 * @remarks triggerName: `slideInDownOnIncr`
 */
export const slideInDownOnIncr = createOnIncr(
  slideInDown,
  name,
  defaults,
  getAnimatecssDefaults()
);
