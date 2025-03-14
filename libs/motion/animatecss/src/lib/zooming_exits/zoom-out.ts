/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/zooming_entrances/zoomOut.css
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

type zoomOutMotionOptions = MotionOptions;

const defaults = createDefaults<zoomOutMotionOptions>();

const name = `zoomOut`;

/**
 * zoomOut animation
 */
export const zoomOut = createMotionFromAnimate<zoomOutMotionOptions>(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0.5 }),
    style({ opacity: 0, offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `zoomOut` animation
 */
export const setZoomOutDefaults = setDefaults<zoomOutMotionOptions>(defaults);

/**
 * zoomOut animation on :enter
 * @remarks triggerName: `zoomOutOnLeave`
 */
export const zoomOutOnLeave = createOnLeave(
  zoomOut,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * zoomOut animation on :decr
 * @remarks triggerName: `zoomOutOnDecr`
 */
export const zoomOutOnDecr = createOnDecr(
  zoomOut,
  name,
  defaults,
  getAnimatecssDefaults()
);
