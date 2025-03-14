/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/zooming_entrances/zoomInRight.css
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

type zoomInRightMotionOptions = MotionOptions;

const defaults = createDefaults<zoomInRightMotionOptions>();

const name = `zoomInRight`;

/**
 * zoomInRight animation
 */
export const zoomInRight = createMotionFromAnimate<zoomInRightMotionOptions>(
  keyframes([
    style({
      visibility: 'visible',
      opacity: 0,
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
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
 * sets default values for the `zoomInRight` animation
 */
export const setzoomInRightDefaults =
  setDefaults<zoomInRightMotionOptions>(defaults);

/**
 * zoomInRight animation on :enter
 * @remarks triggerName: `zoomInRightOnEnter`
 */
export const zoomInRightOnEnter = createOnEnter(
  zoomInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * zoomInRight animation on :incr
 * @remarks triggerName: `zoomInRightOnIncr`
 */
export const zoomInRightOnIncr = createOnIncr(
  zoomInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
