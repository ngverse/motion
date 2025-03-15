/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/rubberBand.css
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

type rubberBandMotionOptions = MotionOptions;

const defaults = createDefaults<rubberBandMotionOptions>();
const name = `rubberBand`;

/**
 * rubberBand animation
 */
export const rubberBand = createMotionFromAnimate<rubberBandMotionOptions>(
  keyframes([
    style({
      visibility: AUTO_STYLE,
      transform: 'scale3d(1, 1, 1)',
      easing: 'ease',
      offset: 0,
    }),
    style({ transform: 'scale3d(1.25, 0.75, 1)', easing: 'ease', offset: 0.3 }),
    style({ transform: 'scale3d(0.75, 1.25, 1)', easing: 'ease', offset: 0.4 }),
    style({ transform: 'scale3d(1.15, 0.85, 1)', easing: 'ease', offset: 0.5 }),
    style({
      transform: 'scale3d(0.95, 1.05, 1)',
      easing: 'ease',
      offset: 0.65,
    }),
    style({
      transform: 'scale3d(1.05, 0.95, 1)',
      easing: 'ease',
      offset: 0.75,
    }),
    style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `rubberBand` animation
 */
export const setRubberBandDefaults =
  setDefaults<rubberBandMotionOptions>(defaults);

/**
 * rubberBand animation on :enter
 * @remarks triggerName: `rubberBandOnEnter`
 */
export const rubberBandOnEnter = createOnEnter(
  rubberBand,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rubberBand animation on :leave
 * @remarks triggerName: `rubberBandOnLeave`
 */
export const rubberBandOnLeave = createOnLeave(
  rubberBand,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rubberBand animation on :incr
 * @remarks triggerName: `rubberBandOnIncr`
 */
export const rubberBandOnIncr = createOnIncr(
  rubberBand,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * rubberBand animation on :decr
 * @remarks triggerName: `rubberBandOnDecr`
 */
export const rubberBandOnDecr = createOnDecr(
  rubberBand,
  name,
  defaults,
  getAnimatecssDefaults()
);
