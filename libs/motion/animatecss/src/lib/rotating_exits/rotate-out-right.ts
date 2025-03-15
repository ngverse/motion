/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/zooming_entrances/zoomOutRight.css
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

type zoomOutRightMotionOptions = MotionOptions;

const defaults = createDefaults<zoomOutRightMotionOptions>();

const name = `zoomOutRight`;

/**
 * zoomOutRight animation
 */
export const zoomOutRight = createMotionFromAnimate<zoomOutRightMotionOptions>(
  keyframes([
    style({
      opacity: 1,
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
      offset: 0.4,
    }),
    style({
      opacity: 0,
      transform: 'scale(0.1) translate3d(2000px, 0, 0)',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `zoomOutRight` animation
 */
export const setZoomOutRightDefaults =
  setDefaults<zoomOutRightMotionOptions>(defaults);

/**
 * zoomOutRight animation on :enter
 * @remarks triggerName: `zoomOutRightOnLeave`
 */
export const zoomOutRightOnLeave = createOnLeave(
  zoomOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * zoomOutRight animation on :decr
 * @remarks triggerName: `zoomOutRightOnDecr`
 */
export const zoomOutRightOnDecr = createOnDecr(
  zoomOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
