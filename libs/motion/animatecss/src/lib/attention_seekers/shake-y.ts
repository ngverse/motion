/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/shakeY.css
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

type shakeYMotionOptions = MotionOptions;

const defaults = createDefaults<shakeYMotionOptions>();
const name = `shakeY`;

/**
 * shakeY animation
 */
export const shakeY = createMotionFromAnimate<shakeYMotionOptions>(
  keyframes([
    style({
      visibility: AUTO_STYLE,
      transform: 'translate3d(0, 0, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({
      transform: 'translate3d(0, -10px, 0)',
      easing: 'ease',
      offset: 0.1,
    }),
    style({
      transform: 'translate3d(0, 10px, 0)',
      easing: 'ease',
      offset: 0.2,
    }),
    style({
      transform: 'translate3d(0, -10px, 0)',
      easing: 'ease',
      offset: 0.3,
    }),
    style({
      transform: 'translate3d(0, 10px, 0)',
      easing: 'ease',
      offset: 0.4,
    }),
    style({
      transform: 'translate3d(0, -10px, 0)',
      easing: 'ease',
      offset: 0.5,
    }),
    style({
      transform: 'translate3d(0, 10px, 0)',
      easing: 'ease',
      offset: 0.6,
    }),
    style({
      transform: 'translate3d(0, -10px, 0)',
      easing: 'ease',
      offset: 0.7,
    }),
    style({
      transform: 'translate3d(0, 10px, 0)',
      easing: 'ease',
      offset: 0.8,
    }),
    style({
      transform: 'translate3d(0, -10px, 0)',
      easing: 'ease',
      offset: 0.9,
    }),
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `shakeY` animation
 */
export const setShakeYDefaults = setDefaults<shakeYMotionOptions>(defaults);

/**
 * shakeY animation on :enter
 * @remarks triggerName: `shakeYOnEnter`
 */
export const shakeYOnEnter = createOnEnter(
  shakeY,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * shakeY animation on :leave
 * @remarks triggerName: `shakeYOnLeave`
 */
export const shakeYOnLeave = createOnLeave(
  shakeY,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * shakeY animation on :incr
 * @remarks triggerName: `shakeYOnIncr`
 */
export const shakeYOnIncr = createOnIncr(
  shakeY,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * shakeY animation on :decr
 * @remarks triggerName: `shakeYOnDecr`
 */
export const shakeYOnDecr = createOnDecr(
  shakeY,
  name,
  defaults,
  getAnimatecssDefaults()
);
