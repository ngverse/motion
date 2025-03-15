/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/fading_entrances/fadeInBottomRight.css
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

type fadeInBottomRightMotionOptions = MotionOptions;

const defaults = createDefaults<fadeInBottomRightMotionOptions>();

const name = `fadeInBottomRight`;

/**
 * fadeInBottomRight animation
 */
export const fadeInBottomRight =
  createMotionFromAnimate<fadeInBottomRightMotionOptions>(
    keyframes([
      style({ opacity: 0, transform: 'translate3d(100%, 100%, 0)', offset: 0 }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `fadeInBottomRight` animation
 */
export const setFadeInBottomRightDefaults =
  setDefaults<fadeInBottomRightMotionOptions>(defaults);

/**
 * fadeInBottomRight animation on :enter
 * @remarks triggerName: `fadeInBottomRightOnEnter`
 */
export const fadeInBottomRightOnEnter = createOnEnter(
  fadeInBottomRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * fadeInBottomRight animation on :incr
 * @remarks triggerName: `fadeInBottomRightOnIncr`
 */
export const fadeInBottomRightOnIncr = createOnIncr(
  fadeInBottomRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
