/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/lightSpeedOutRight/lightSpeedOutRight.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnLeave,
  MotionOptions,
  setDefaults,
} from '@ngverse/motion/core';
import { getAnimatecssDefaults } from '../common/animate-css-defaults';

type lightSpeedOutRightMotionOptions = MotionOptions;

const defaults = createDefaults<lightSpeedOutRightMotionOptions>();

const name = `lightSpeedOutRight`;

/**
 * lightSpeedOutRight animation
 */
export const lightSpeedOutRight =
  createMotionFromAnimate<lightSpeedOutRightMotionOptions>(
    keyframes([
      style({ opacity: 1, offset: 0 }),
      style({
        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
        opacity: 0,
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `lightSpeedOutRight` animation
 */
export const setLightSpeedOutRightDefaults =
  setDefaults<lightSpeedOutRightMotionOptions>(defaults);

/**
 * lightSpeedOutRight animation on :enter
 * @remarks triggerName: `lightSpeedOutRightOnLeave`
 */
export const lightSpeedOutRightOnLeave = createOnLeave(
  lightSpeedOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * lightSpeedOutRight animation on :decr
 * @remarks triggerName: `lightSpeedOutRightOnDecr`
 */
export const lightSpeedOutRightOnDecr = createOnDecr(
  lightSpeedOutRight,
  name,
  defaults,
  getAnimatecssDefaults()
);
