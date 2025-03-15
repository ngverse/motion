/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/lightspeed/lightSpeedInLeft.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnEnter,
  createOnIncr,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type lightSpeedInLeftMotionOptions = MotionOptions;

const defaults = createDefaults<lightSpeedInLeftMotionOptions>();

const name = `lightSpeedInLeft`;

/**
 * lightSpeedInLeft animation
 */
export const lightSpeedInLeft =
  createMotionFromAnimate<lightSpeedInLeftMotionOptions>(
    keyframes([
      style({
        transform: 'translate3d(-100%, 0, 0) skewX(30deg)',
        opacity: 0,
        offset: 0,
      }),
      style({ transform: 'skewX(-20deg)', opacity: 1, offset: 0.6 }),
      style({ transform: 'skewX(5deg)', offset: 0.8 }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `lightSpeedInLeft` animation
 */
export const setLightSpeedInLeftDefaults =
  setDefaults<lightSpeedInLeftMotionOptions>(defaults);

/**
 * lightSpeedInLeft animation on :enter
 * @remarks triggerName: `lightSpeedInLeftOnEnter`
 */
export const lightSpeedInLeftOnEnter = createOnEnter(
  lightSpeedInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * lightSpeedInLeft animation on :incr
 * @remarks triggerName: `lightSpeedInLeftOnIncr`
 */
export const lightSpeedInLeftOnIncr = createOnIncr(
  lightSpeedInLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
