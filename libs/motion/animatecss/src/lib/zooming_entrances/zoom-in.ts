/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/zooming_entrances/zoomIn.css
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

type zoomInMotionOptions = MotionOptions;

const defaults = createDefaults<zoomInMotionOptions>();

const name = `zoomIn`;

/**
 * zoomIn animation
 */
export const zoomIn = createMotionFromAnimate<zoomInMotionOptions>(
  keyframes([
    style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
    style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0.5 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `zoomIn` animation
 */
export const setZoomInDefaults = setDefaults<zoomInMotionOptions>(defaults);

/**
 * zoomIn animation on :enter
 * @remarks triggerName: `zoomInOnEnter`
 */
export const zoomInOnEnter = createOnEnter(
  zoomIn,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * zoomIn animation on :incr
 * @remarks triggerName: `zoomInOnIncr`
 */
export const zoomInOnIncr = createOnIncr(
  zoomIn,
  name,
  defaults,
  getAnimatecssDefaults()
);
