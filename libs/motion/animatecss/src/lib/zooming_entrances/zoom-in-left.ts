/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/zooming_entrances/zoomInLeft.css
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

type zoomInLeftMotionOptions = MotionOptions;

const defaults = createDefaults<zoomInLeftMotionOptions>();

const name = `zoomInLeft`;

/**
 * zoomInLeft animation
 */
export const zoomInLeft = createMotionFromAnimate<zoomInLeftMotionOptions>(
  keyframes([
    style({
      visibility: 'visible',
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-3000px, 0, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0.6,
    }),
    style({
      opacity: 1,
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `zoomInLeft` animation
 */
export const setzoomInLeftDefaults =
  setDefaults<zoomInLeftMotionOptions>(defaults);

/**
 * zoomInLeft animation on :enter
 * @remarks triggerName: `zoomInLeftOnEnter`
 */
export const zoomInLeftOnEnter = createOnEnter(
  zoomInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * zoomInLeft animation on :incr
 * @remarks triggerName: `zoomInLeftOnIncr`
 */
export const zoomInLeftOnIncr = createOnIncr(
  zoomInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
