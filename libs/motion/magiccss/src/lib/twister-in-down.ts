/**
 * ref: https://github.com/motion-css/motion.css/blob/main/source/attention_seekers/twisterInDown.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnEnter,
  createOnIncr,
  createOnLeave,
} from '@ngverse/motion/core';
import { getMagiccssDefaults } from './common/magic-css-defaults';

const defaults = createDefaults();
const name = `twisterInDown`;

/**
 * twisterInDown animation
 */
export const twisterInDown = createMotionFromAnimate(
  keyframes([
    style({
      opacity: 0,
      transformOrigin: '0 100%',
      transform: 'scale(0, 0) rotate(360deg) translateY(-100%)',
      offset: 0,
    }),
    style({
      transformOrigin: '0 100%',
      transform: 'scale(0, 0) rotate(360deg) translateY(-100%)',
      offset: 0.3,
    }),
    style({
      opacity: 1,
      transformOrigin: '100% 100%',
      transform: 'scale(1, 1) rotate(0deg) translateY(0%)',
      offset: 1,
    }),
  ]),
  defaults,
  getMagiccssDefaults()
);

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
 * twisterInDown animation on :leave
 * @remarks triggerName: `twisterInDownOnLeave`
 */
export const twisterInDownOnLeave = createOnLeave(
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

/**
 * twisterInDown animation on :decr
 * @remarks triggerName: `twisterInDownOnDecr`
 */
export const twisterInDownOnDecr = createOnDecr(
  twisterInDown,
  name,
  defaults,
  getMagiccssDefaults()
);
