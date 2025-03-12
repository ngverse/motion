/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/bounce.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionMotion,
  createOnDecr,
  createOnEnter,
  createOnIncr,
  createOnLeave,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from './common/animate-css-defaults';

const defaults = createDefaults();
const name = `bounce`;

/**
 * bounce animation
 */
export const bounce = createMotionMotion(
  keyframes([
    style({
      transform: 'translate3d(0, 0, 0)',
      'transform-origin': 'center bottom',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0,
    }),
    style({
      transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
      'transform-origin': 'center bottom',
      easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      offset: 0.4,
    }),
    style({
      transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
      'transform-origin': 'center bottom',
      offset: 0.43,
    }),
    style({
      transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
      'transform-origin': 'center bottom',
      easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      offset: 0.7,
    }),
    style({
      transform: 'translate3d(0, 0, 0) scaleY(0.95)',
      'transform-origin': 'center bottom',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      offset: 0.8,
    }),
    style({
      transform: 'translate3d(0, -4px, 0) scaleY(1.02)',
      'transform-origin': 'center bottom',
      offset: 0.9,
    }),
    style({
      transform: 'translate3d(0, 0, 0)',
      'transform-origin': 'center bottom',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounce animation on :enter
 * @remarks triggerName: `bounceOnEnter`
 */
export const bounceOnEnter = createOnEnter(
  bounce,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounce animation on :leave
 * @remarks triggerName: `bounceOnLeave`
 */
export const bounceOnLeave = createOnLeave(
  bounce,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounce animation on :incr
 * @remarks triggerName: `bounceOnIncr`
 */
export const bounceOnIncr = createOnIncr(
  bounce,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * bounce animation on :decr
 * @remarks triggerName: `bounceOnDecr`
 */
export const bounceOnDecr = createOnDecr(
  bounce,
  name,
  defaults,
  getAnimatecssDefaults()
);
