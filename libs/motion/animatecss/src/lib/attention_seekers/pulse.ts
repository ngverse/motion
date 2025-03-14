/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/pulse.css
 */
import { keyframes, style } from '@angular/animations';
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

type pulseMotionOptions = MotionOptions;

const defaults = createDefaults<pulseMotionOptions>();
const name = `pulse`;

/**
 * pulse animation
 */
export const pulse = createMotionFromAnimate<pulseMotionOptions>(
  keyframes([
    style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
    style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `pulse` animation
 */
export const setPulseDefaults = setDefaults<pulseMotionOptions>(defaults);

/**
 * pulse animation on :enter
 * @remarks triggerName: `pulseOnEnter`
 */
export const pulseOnEnter = createOnEnter(
  pulse,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * pulse animation on :leave
 * @remarks triggerName: `pulseOnLeave`
 */
export const pulseOnLeave = createOnLeave(
  pulse,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * pulse animation on :incr
 * @remarks triggerName: `pulseOnIncr`
 */
export const pulseOnIncr = createOnIncr(
  pulse,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * pulse animation on :decr
 * @remarks triggerName: `pulseOnDecr`
 */
export const pulseOnDecr = createOnDecr(
  pulse,
  name,
  defaults,
  getAnimatecssDefaults()
);
