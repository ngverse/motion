/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/heartBeat.css
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

type heartBeatMotionOptions = MotionOptions;

const defaults = createDefaults<heartBeatMotionOptions>();
const name = `heartBeat`;

/**
 * heartBeat animation
 */
export const heartBeat = createMotionFromAnimate<heartBeatMotionOptions>(
  keyframes([
    style({
      visibility: AUTO_STYLE,
      transform: 'scale(1)',
      easing: 'ease-in-out',
      offset: 0,
    }),
    style({
      transform: 'scale(1.3)',
      easing: 'ease-in-out',
      offset: 0.14,
    }),
    style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.28 }),
    style({
      transform: 'scale(1.3)',
      easing: 'ease-in-out',
      offset: 0.42,
    }),
    style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.7 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `heartBeat` animation
 */
export const setHeartBeatDefaults =
  setDefaults<heartBeatMotionOptions>(defaults);

/**
 * heartBeat animation on :enter
 * @remarks triggerName: `heartBeatOnEnter`
 */
export const heartBeatOnEnter = createOnEnter(
  heartBeat,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * heartBeat animation on :leave
 * @remarks triggerName: `heartBeatOnLeave`
 */
export const heartBeatOnLeave = createOnLeave(
  heartBeat,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * heartBeat animation on :incr
 * @remarks triggerName: `heartBeatOnIncr`
 */
export const heartBeatOnIncr = createOnIncr(
  heartBeat,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * heartBeat animation on :decr
 * @remarks triggerName: `heartBeatOnDecr`
 */
export const heartBeatOnDecr = createOnDecr(
  heartBeat,
  name,
  defaults,
  getAnimatecssDefaults()
);
