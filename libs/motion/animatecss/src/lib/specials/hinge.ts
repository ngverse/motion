/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/hinge.css
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

type hingeMotionOptions = MotionOptions;

const defaults = createDefaults<hingeMotionOptions>({
  duration: getAnimatecssDefaults().duration * 2,
});
const name = `hinge`;

/**
 * hinge animation
 */
export const hinge = createMotionFromAnimate<hingeMotionOptions>(
  keyframes([
    style({
      opacity: 1,
      'transform-origin': 'top left',
      transform: 'translate3d(0, 0, 0)',
      easing: 'ease-in-out',
      offset: 0,
    }),
    style({
      opacity: 1,
      'transform-origin': 'top left',
      transform: 'rotate3d(0, 0, 1, 80deg)',
      easing: 'ease-in-out',
      offset: 0.2,
    }),
    style({
      opacity: 1,
      'transform-origin': 'top left',
      transform: 'rotate3d(0, 0, 1, 60deg)',
      easing: 'ease-in-out',
      offset: 0.4,
    }),
    style({
      opacity: 1,
      'transform-origin': 'top left',
      transform: 'rotate3d(0, 0, 1, 80deg)',
      easing: 'ease-in-out',
      offset: 0.6,
    }),
    style({
      opacity: 1,
      'transform-origin': 'top left',
      transform: 'rotate3d(0, 0, 1, 60deg)',
      easing: 'ease-in-out',
      offset: 0.8,
    }),
    style({
      opacity: 0,
      'transform-origin': 'top left',
      transform: 'translate3d(0, 700px, 0)',
      easing: 'ease-in-out',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `hinge` animation
 */
export const setHingeDefaults = setDefaults<hingeMotionOptions>(defaults);

/**
 * hinge animation on :enter
 * @remarks triggerName: `hingeOnEnter`
 */
export const hingeOnEnter = createOnEnter(
  hinge,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * hinge animation on :leave
 * @remarks triggerName: `hingeOnLeave`
 */
export const hingeOnLeave = createOnLeave(
  hinge,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * hinge animation on :incr
 * @remarks triggerName: `hingeOnIncr`
 */
export const hingeOnIncr = createOnIncr(
  hinge,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * hinge animation on :decr
 * @remarks triggerName: `hingeOnDecr`
 */
export const hingeOnDecr = createOnDecr(
  hinge,
  name,
  defaults,
  getAnimatecssDefaults()
);
