/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/tada.css
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

type tadaMotionOptions = MotionOptions;

const defaults = createDefaults<tadaMotionOptions>();
const name = `tada`;

/**
 * tada animation
 */
export const tada = createMotionFromAnimate<tadaMotionOptions>(
  keyframes([
    style({
      visibility: AUTO_STYLE,
      transform: 'scale3d(1, 1, 1)',
      easing: 'ease',
      offset: 0,
    }),
    style({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      easing: 'ease',
      offset: 0.1,
    }),
    style({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      easing: 'ease',
      offset: 0.2,
    }),
    style({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      easing: 'ease',
      offset: 0.3,
    }),
    style({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      easing: 'ease',
      offset: 0.4,
    }),
    style({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      easing: 'ease',
      offset: 0.5,
    }),
    style({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      easing: 'ease',
      offset: 0.6,
    }),
    style({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      easing: 'ease',
      offset: 0.7,
    }),
    style({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      easing: 'ease',
      offset: 0.8,
    }),
    style({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      easing: 'ease',
      offset: 0.9,
    }),
    style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `tada` animation
 */
export const setTadaDefaults = setDefaults<tadaMotionOptions>(defaults);

/**
 * tada animation on :enter
 * @remarks triggerName: `tadaOnEnter`
 */
export const tadaOnEnter = createOnEnter(
  tada,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * tada animation on :leave
 * @remarks triggerName: `tadaOnLeave`
 */
export const tadaOnLeave = createOnLeave(
  tada,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * tada animation on :incr
 * @remarks triggerName: `tadaOnIncr`
 */
export const tadaOnIncr = createOnIncr(
  tada,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * tada animation on :decr
 * @remarks triggerName: `tadaOnDecr`
 */
export const tadaOnDecr = createOnDecr(
  tada,
  name,
  defaults,
  getAnimatecssDefaults()
);
