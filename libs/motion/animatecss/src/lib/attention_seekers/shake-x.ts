/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/shakeX.css
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

type shakeXMotionOptions = MotionOptions;

const defaults = createDefaults<shakeXMotionOptions>();
const name = `shakeX`;

/**
 * shakeX animation
 */
export const shakeX = createMotionFromAnimate<shakeXMotionOptions>(
  keyframes([
    style({
      visibility: AUTO_STYLE,
      transform: 'translate3d(0, 0, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({
      transform: 'translate3d(-10px, 0, 0)',
      easing: 'ease',
      offset: 0.1,
    }),
    style({
      transform: 'translate3d(10px, 0, 0)',
      easing: 'ease',
      offset: 0.2,
    }),
    style({
      transform: 'translate3d(-10px, 0, 0)',
      easing: 'ease',
      offset: 0.3,
    }),
    style({
      transform: 'translate3d(10px, 0, 0)',
      easing: 'ease',
      offset: 0.4,
    }),
    style({
      transform: 'translate3d(-10px, 0, 0)',
      easing: 'ease',
      offset: 0.5,
    }),
    style({
      transform: 'translate3d(10px, 0, 0)',
      easing: 'ease',
      offset: 0.6,
    }),
    style({
      transform: 'translate3d(-10px, 0, 0)',
      easing: 'ease',
      offset: 0.7,
    }),
    style({
      transform: 'translate3d(10px, 0, 0)',
      easing: 'ease',
      offset: 0.8,
    }),
    style({
      transform: 'translate3d(-10px, 0, 0)',
      easing: 'ease',
      offset: 0.9,
    }),
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `shakeX` animation
 */
export const setShakeXDefaults = setDefaults<shakeXMotionOptions>(defaults);

/**
 * shakeX animation on :enter
 * @remarks triggerName: `shakeXOnEnter`
 */
export const shakeXOnEnter = createOnEnter(
  shakeX,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * shakeX animation on :leave
 * @remarks triggerName: `shakeXOnLeave`
 */
export const shakeXOnLeave = createOnLeave(
  shakeX,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * shakeX animation on :incr
 * @remarks triggerName: `shakeXOnIncr`
 */
export const shakeXOnIncr = createOnIncr(
  shakeX,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * shakeX animation on :decr
 * @remarks triggerName: `shakeXOnDecr`
 */
export const shakeXOnDecr = createOnDecr(
  shakeX,
  name,
  defaults,
  getAnimatecssDefaults()
);
