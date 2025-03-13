/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/flash.css
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
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

const defaults = createDefaults();
const name = `flash`;

/**
 * flash animation
 */
export const flash = createMotionMotion(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, offset: 0.25 }),
    style({ opacity: 1, offset: 0.5 }),
    style({ opacity: 0, offset: 0.75 }),
    style({ opacity: 1, offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * flash animation on :enter
 * @remarks triggerName: `flashOnEnter`
 */
export const flashOnEnter = createOnEnter(
  flash,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flash animation on :leave
 * @remarks triggerName: `flashOnLeave`
 */
export const flashOnLeave = createOnLeave(
  flash,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flash animation on :incr
 * @remarks triggerName: `flashOnIncr`
 */
export const flashOnIncr = createOnIncr(
  flash,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * flash animation on :decr
 * @remarks triggerName: `flashOnDecr`
 */
export const flashOnDecr = createOnDecr(
  flash,
  name,
  defaults,
  getAnimatecssDefaults()
);
