/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/jello.css
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

type jelloMotionOptions = MotionOptions;

const defaults = createDefaults<jelloMotionOptions>();
const name = `jello`;

/**
 * jello animation
 */
export const jello = createMotionFromAnimate<jelloMotionOptions>(
  keyframes([
    style({
      visibility: AUTO_STYLE,
      transform: 'translate3d(0, 0, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0.111 }),
    style({
      transform: 'skewX(-12.5deg) skewY(-12.5deg)',
      easing: 'ease',
      offset: 0.222,
    }),
    style({
      transform: 'skewX(6.25deg) skewY(6.25deg)',
      easing: 'ease',
      offset: 0.333,
    }),
    style({
      transform: 'skewX(-3.125deg) skewY(-3.125deg)',
      easing: 'ease',
      offset: 0.444,
    }),
    style({
      transform: 'skewX(1.5625deg) skewY(1.5625deg)',
      easing: 'ease',
      offset: 0.555,
    }),
    style({
      transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
      easing: 'ease',
      offset: 0.666,
    }),
    style({
      transform: 'skewX(0.390625deg) skewY(0.390625deg)',
      easing: 'ease',
      offset: 0.777,
    }),
    style({
      transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
      easing: 'ease',
      offset: 0.888,
    }),
    style({ transform: 'skewX(0deg) skewY(0deg)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `jello` animation
 */
export const setJelloDefaults = setDefaults<jelloMotionOptions>(defaults);

/**
 * jello animation on :enter
 * @remarks triggerName: `jelloOnEnter`
 */
export const jelloOnEnter = createOnEnter(
  jello,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * jello animation on :leave
 * @remarks triggerName: `jelloOnLeave`
 */
export const jelloOnLeave = createOnLeave(
  jello,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * jello animation on :incr
 * @remarks triggerName: `jelloOnIncr`
 */
export const jelloOnIncr = createOnIncr(
  jello,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * jello animation on :decr
 * @remarks triggerName: `jelloOnDecr`
 */
export const jelloOnDecr = createOnDecr(
  jello,
  name,
  defaults,
  getAnimatecssDefaults()
);
