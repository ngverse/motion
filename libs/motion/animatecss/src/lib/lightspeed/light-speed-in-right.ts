/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/lightspeed/lightSpeedInRight.css
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

type lightSpeedInRightMotionOptions = MotionOptions;

const defaults = createDefaults<lightSpeedInRightMotionOptions>();

const name = `lightSpeedInRight`;

/**
 * lightSpeedInRight animation
 */
export const lightSpeedInRight =
  createMotionFromAnimate<lightSpeedInRightMotionOptions>(
    keyframes([
      style({
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        opacity: 0,
        offset: 0,
      }),
      style({ transform: 'skewX(20deg)', opacity: 1, offset: 0.6 }),
      style({ transform: 'skewX(-5deg)', offset: 0.8 }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `lightSpeedInRight` animation
 */
export const setLightSpeedInRightDefaults =
  setDefaults<lightSpeedInRightMotionOptions>(defaults);

/**
 * lightSpeedInRight animation on :enter
 * @remarks triggerName: `lightSpeedInRightOnEnter`
 */
export const lightSpeedInRightOnEnter = createOnEnter(
  lightSpeedInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * lightSpeedInRight animation on :incr
 * @remarks triggerName: `lightSpeedInRightOnIncr`
 */
export const lightSpeedInRightOnIncr = createOnIncr(
  lightSpeedInRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
