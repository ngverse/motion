/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/jackInTheBox.css
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

type jackInTheBoxMotionOptions = MotionOptions;

const defaults = createDefaults<jackInTheBoxMotionOptions>();
const name = `jackInTheBox`;

/**
 * jackInTheBox animation
 */
export const jackInTheBox = createMotionFromAnimate<jackInTheBoxMotionOptions>(
  keyframes([
    style({
      'transform-origin': 'center bottom',
      transform: 'scale(0.1) rotate(30deg)',
      easing: 'ease',
      offset: 0,
    }),
    style({
      'transform-origin': 'center bottom',
      transform: 'rotate(-10deg)',
      easing: 'ease',
      offset: 0.5,
    }),
    style({
      'transform-origin': 'center bottom',
      transform: 'rotate(3deg)',
      easing: 'ease',
      offset: 0.7,
    }),
    style({
      'transform-origin': 'center bottom',
      transform: 'scale(1)',
      easing: 'ease',
      offset: 1,
    }),
  ]),
  defaults,
  getAnimatecssDefaults()
);

/**
 * sets default values for the `jackInTheBox` animation
 */
export const setJackInTheBoxDefaults =
  setDefaults<jackInTheBoxMotionOptions>(defaults);

/**
 * jackInTheBox animation on :enter
 * @remarks triggerName: `jackInTheBoxOnEnter`
 */
export const jackInTheBoxOnEnter = createOnEnter(
  jackInTheBox,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * jackInTheBox animation on :leave
 * @remarks triggerName: `jackInTheBoxOnLeave`
 */
export const jackInTheBoxOnLeave = createOnLeave(
  jackInTheBox,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * jackInTheBox animation on :incr
 * @remarks triggerName: `jackInTheBoxOnIncr`
 */
export const jackInTheBoxOnIncr = createOnIncr(
  jackInTheBox,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * jackInTheBox animation on :decr
 * @remarks triggerName: `jackInTheBoxOnDecr`
 */
export const jackInTheBoxOnDecr = createOnDecr(
  jackInTheBox,
  name,
  defaults,
  getAnimatecssDefaults()
);
