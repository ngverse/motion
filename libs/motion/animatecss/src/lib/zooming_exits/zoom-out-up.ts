/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/zooming_entrances/zoomOutUp.css
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

type zoomOutUpMotionOptions = MotionOptions;

const defaults = createDefaults<zoomOutUpMotionOptions>();

const name = `zoomOutUp`;

/**
 * zoomOutUp animation
 */
export const zoomOutUp = createMotionFromAnimate<zoomOutUpMotionOptions>(
  keyframes([
    style({
      'transform-origin': 'center bottom',
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      easing: 'ease',
      offset: 0.4,
    }),
    style({
      'transform-origin': 'center bottom',
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `zoomOutUp` animation
 */
export const setzoomOutUpDefaults =
  setDefaults<zoomOutUpMotionOptions>(defaults);

/**
 * zoomOutUp animation on :enter
 * @remarks triggerName: `zoomOutUpOnLeave`
 */
export const zoomOutUpOnLeave = createOnLeave(
  zoomOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * zoomOutUp animation on :decr
 * @remarks triggerName: `zoomOutUpOnDecr`
 */
export const zoomOutUpOnDecr = createOnDecr(
  zoomOutUp,
  name,
  defaults,
  getAnimatecssDefaults()
);
