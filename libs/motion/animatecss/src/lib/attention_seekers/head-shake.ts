/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/headShake.css
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

type headShakeMotionOptions = MotionOptions;

const defaults = createDefaults<headShakeMotionOptions>();
const name = `headShake`;

/**
 * headShake animation
 */
export const headShake = createMotionFromAnimate<headShakeMotionOptions>(
  keyframes([
    style({
      visibility: AUTO_STYLE,
      transform: 'translateX(0)',
      easing: 'ease-in-out',
      offset: 0,
    }),
    style({
      transform: 'translateX(-6px) rotateY(-9deg)',
      easing: 'ease-in-out',
      offset: 0.065,
    }),
    style({
      transform: 'translateX(5px) rotateY(7deg)',
      easing: 'ease-in-out',
      offset: 0.185,
    }),
    style({
      transform: 'translateX(-3px) rotateY(-5deg)',
      easing: 'ease-in-out',
      offset: 0.315,
    }),
    style({
      transform: 'translateX(2px) rotateY(3deg)',
      easing: 'ease-in-out',
      offset: 0.435,
    }),
    style({ transform: 'translateX(0)', easing: 'ease-in-out', offset: 0.5 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `headShake` animation
 */
export const setHeadShakeDefaults =
  setDefaults<headShakeMotionOptions>(defaults);

/**
 * headShake animation on :enter
 * @remarks triggerName: `headShakeOnEnter`
 */
export const headShakeOnEnter = createOnEnter(
  headShake,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * headShake animation on :leave
 * @remarks triggerName: `headShakeOnLeave`
 */
export const headShakeOnLeave = createOnLeave(
  headShake,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * headShake animation on :incr
 * @remarks triggerName: `headShakeOnIncr`
 */
export const headShakeOnIncr = createOnIncr(
  headShake,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * headShake animation on :decr
 * @remarks triggerName: `headShakeOnDecr`
 */
export const headShakeOnDecr = createOnDecr(
  headShake,
  name,
  defaults,
  getAnimatecssDefaults()
);
