/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInDown.css
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

type fadeInDownMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInDownMotionOptions>();

const name = `fadeInDown`;

/**
 * fadeInDown animation
 */
export const fadeInDown = createMotionFromAnimate<fadeInDownMotionOptions>(
  keyframes([
    style({
      visibility: 'visible',
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)',
      offset: 0,
    }),
    style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `fadeInDown` animation
 */
export const setFadeInDownDefaults =
  setDefaults<fadeInDownMotionOptions>(defaults);

/**
 * fadeInDown animation on :enter
 * @remarks triggerName: `fadeInDownOnEnter`
 */
export const fadeInDownOnEnter = createOnEnter(
  fadeInDown,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInDown animation on :incr
 * @remarks triggerName: `fadeInDownOnIncr`
 */
export const fadeInDownOnIncr = createOnIncr(
  fadeInDown,
  name,
  defaults,
  getAnimatecssDefaults()
);
