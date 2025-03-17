/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/zooming_entrances/twisterInDown.css
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
import { getMagiccssDefaults } from '../common/magic-css-defaults';

type twisterInDownMotionOptions = MotionOptions;

const defaults = createDefaults<twisterInDownMotionOptions>();

const name = `twisterInDown`;

/**
 * twisterInDown animation
 */
export const twisterInDown =
  createMotionFromAnimate<twisterInDownMotionOptions>(
    keyframes([
      style({
        offset: 0,
        opacity: 0,
        transformOrigin: '0 100%',
        transform: 'scale(0, 0) rotate(360deg) translateY(-100%)',
      }),
      style({
        offset: 0.3,
        opacity: 0,
        transformOrigin: '0 100%',
        transform: 'scale(0, 0) rotate(360deg) translateY(-100%)',
      }),
      style({
        offset: 1,
        opacity: 1,
        transformOrigin: '100% 100%',
        transform: 'scale(1, 1) rotate(0deg) translateY(0%)',
      }),
    ]),
    defaults,
    getMagiccssDefaults()
  );

/**
 * sets default values for the `twisterInDown` animation
 */
export const setTwisterInDownDefaults =
  setDefaults<twisterInDownMotionOptions>(defaults);

/**
 * twisterInDown animation on :enter
 * @remarks triggerName: `twisterInDownOnEnter`
 */
export const twisterInDownOnEnter = createOnEnter(
  twisterInDown,
  name,
  defaults,
  getMagiccssDefaults()
);

/**
 * twisterInDown animation on :incr
 * @remarks triggerName: `twisterInDownOnIncr`
 */
export const twisterInDownOnIncr = createOnIncr(
  twisterInDown,
  name,
  defaults,
  getMagiccssDefaults()
);
