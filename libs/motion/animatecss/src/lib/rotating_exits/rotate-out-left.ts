/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/zooming_entrances/zoomOutLeft.css
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

type zoomOutLeftMotionOptions = MotionOptions;

const defaults = createDefaults<zoomOutLeftMotionOptions>();

const name = `zoomOutLeft`;

/**
 * zoomOutLeft animation
 */
export const zoomOutLeft = createMotionFromAnimate<zoomOutLeftMotionOptions>(
  keyframes([
    style({
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
      offset: 0.4,
    }),
    style({
      opacity: 0,
      transform: 'scale(0.1) translate3d(-2000px, 0, 0)',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `zoomOutLeft` animation
 */
export const setZoomOutLeftDefaults =
  setDefaults<zoomOutLeftMotionOptions>(defaults);

/**
 * zoomOutLeft animation on :enter
 * @remarks triggerName: `zoomOutLeftOnLeave`
 */
export const zoomOutLeftOnLeave = createOnLeave(
  zoomOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * zoomOutLeft animation on :decr
 * @remarks triggerName: `zoomOutLeftOnDecr`
 */
export const zoomOutLeftOnDecr = createOnDecr(
  zoomOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
