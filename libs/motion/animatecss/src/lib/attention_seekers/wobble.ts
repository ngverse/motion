/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/wobble.css
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

type wobbleMotionOptions = MotionOptions;

const defaults = createDefaults<wobbleMotionOptions>();
const name = `wobble`;

/**
 * wobble animation
 */
export const wobble = createMotionFromAnimate<wobbleMotionOptions>(
  keyframes([
    style({
      visibility: AUTO_STYLE,
      transform: 'translate3d(0, 0, 0)',
      easing: 'ease',
      offset: 0,
    }),
    style({
      transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
      easing: 'ease',
      offset: 0.15,
    }),
    style({
      transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
      easing: 'ease',
      offset: 0.3,
    }),
    style({
      transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
      easing: 'ease',
      offset: 0.45,
    }),
    style({
      transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
      easing: 'ease',
      offset: 0.6,
    }),
    style({
      transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
      easing: 'ease',
      offset: 0.75,
    }),
    style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `wobble` animation
 */
export const setWobbleDefaults = setDefaults<wobbleMotionOptions>(defaults);

/**
 * wobble animation on :enter
 * @remarks triggerName: `wobbleOnEnter`
 */
export const wobbleOnEnter = createOnEnter(
  wobble,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * wobble animation on :leave
 * @remarks triggerName: `wobbleOnLeave`
 */
export const wobbleOnLeave = createOnLeave(
  wobble,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * wobble animation on :incr
 * @remarks triggerName: `wobbleOnIncr`
 */
export const wobbleOnIncr = createOnIncr(
  wobble,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * wobble animation on :decr
 * @remarks triggerName: `wobbleOnDecr`
 */
export const wobbleOnDecr = createOnDecr(
  wobble,
  name,
  defaults,
  getAnimatecssDefaults()
);
