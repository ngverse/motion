/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/zooming_entrances/zoomOutDown.css
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

type zoomOutDownMotionOptions = MotionOptions;

const defaults = createDefaults<zoomOutDownMotionOptions>();

const name = `zoomOutDown`;

/**
 * zoomOutDown animation
 */
export const zoomOutDown = createMotionFromAnimate<zoomOutDownMotionOptions>(
  keyframes([
    style({
      'transform-origin': 'center bottom',
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
      easing: 'ease',
      offset: 0.4,
    }),
    style({
      'transform-origin': 'center bottom',
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `zoomOutDown` animation
 */
export const setZoomOutDownDefaults =
  setDefaults<zoomOutDownMotionOptions>(defaults);

/**
 * zoomOutDown animation on :enter
 * @remarks triggerName: `zoomOutDownOnLeave`
 */
export const zoomOutDownOnLeave = createOnLeave(
  zoomOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * zoomOutDown animation on :decr
 * @remarks triggerName: `zoomOutDownOnDecr`
 */
export const zoomOutDownOnDecr = createOnDecr(
  zoomOutDown,
  name,
  defaults,
  getAnimatecssDefaults()
);
