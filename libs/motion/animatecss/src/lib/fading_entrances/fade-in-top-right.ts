/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInTopRight.css
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

type fadeInTopRightMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInTopRightMotionOptions>();

const name = `fadeInTopRight`;

/**
 * fadeInTopRight animation
 */
export const fadeInTopRight =
  createMotionFromAnimate<fadeInTopRightMotionOptions>(
    keyframes([
      style({
        opacity: 0,
        transform: 'translate3d(100%, -100%, 0)',
        offset: 0,
      }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeInTopRight` animation
 */
export const setFadeInTopRightDefaults =
  setDefaults<fadeInTopRightMotionOptions>(defaults);

/**
 * fadeInTopRight animation on :enter
 * @remarks triggerName: `fadeInTopRightOnEnter`
 */
export const fadeInTopRightOnEnter = createOnEnter(
  fadeInTopRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInTopRight animation on :incr
 * @remarks triggerName: `fadeInTopRightOnIncr`
 */
export const fadeInTopRightOnIncr = createOnIncr(
  fadeInTopRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
