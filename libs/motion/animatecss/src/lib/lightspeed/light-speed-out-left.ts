/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/lightspeed/lightSpeedOutLeft.css
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

type lightSpeedOutLeftMotionOptions = MotionOptions;

const defaults = createDefaults<lightSpeedOutLeftMotionOptions>();

const name = `lightSpeedOutLeft`;

/**
 * lightSpeedOutLeft animation
 */
export const lightSpeedOutLeft =
  createMotionFromAnimate<lightSpeedOutLeftMotionOptions>(
    keyframes([
      style({ opacity: 1, offset: 0 }),
      style({
        transform: 'translate3d(-100%, 0, 0) skewX(-30deg)',
        opacity: 0,
        offset: 1,
      }),
    ]),
    defaults,
    getAnimatecssDefaults()
  );

/**
 * sets default values for the `lightSpeedOutLeft` animation
 */
export const setLightSpeedOutLeftDefaults =
  setDefaults<lightSpeedOutLeftMotionOptions>(defaults);

/**
 * lightSpeedOutLeft animation on :enter
 * @remarks triggerName: `lightSpeedOutLeftOnLeave`
 */
export const lightSpeedOutLeftOnLeave = createOnLeave(
  lightSpeedOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);

/**
 * lightSpeedOutLeft animation on :decr
 * @remarks triggerName: `lightSpeedOutLeftOnDecr`
 */
export const lightSpeedOutLeftOnDecr = createOnDecr(
  lightSpeedOutLeft,
  name,
  defaults,
  getAnimatecssDefaults()
);
