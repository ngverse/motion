/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/swing.css
 */
import { AUTO_STYLE, keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnEnter,
  createOnIncr,
  createOnLeave,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type swingMotionOptions = MotionOptions;

const defaults = createDefaults<swingMotionOptions>();
const name = `swing`;

/**
 * swing animation
 */
export const swing = createMotionFromAnimate<swingMotionOptions>(
  keyframes([
    style({ 'transform-origin': 'top center', offset: 0 }),
    style({
      visibility: AUTO_STYLE,
      transform: 'rotate3d(0, 0, 1, 0deg)',
      easing: 'ease',
      offset: 0,
    }),
    style({
      transform: 'rotate3d(0, 0, 1, 15deg)',
      easing: 'ease',
      offset: 0.2,
    }),
    style({
      transform: 'rotate3d(0, 0, 1, -10deg)',
      easing: 'ease',
      offset: 0.4,
    }),
    style({
      transform: 'rotate3d(0, 0, 1, 5deg)',
      easing: 'ease',
      offset: 0.6,
    }),
    style({
      transform: 'rotate3d(0, 0, 1, -5deg)',
      easing: 'ease',
      offset: 0.8,
    }),
    style({ transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `swing` animation
 */
export const setSwingDefaults = setDefaults<swingMotionOptions>(defaults);

/**
 * swing animation on :enter
 * @remarks triggerName: `swingOnEnter`
 */
export const swingOnEnter = createOnEnter(
  swing,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * swing animation on :leave
 * @remarks triggerName: `swingOnLeave`
 */
export const swingOnLeave = createOnLeave(
  swing,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * swing animation on :incr
 * @remarks triggerName: `swingOnIncr`
 */
export const swingOnIncr = createOnIncr(
  swing,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * swing animation on :decr
 * @remarks triggerName: `swingOnDecr`
 */
export const swingOnDecr = createOnDecr(
  swing,
  name,
  defaults,
  getAnimatecssDefaults()
);
