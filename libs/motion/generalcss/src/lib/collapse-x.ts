/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/collapseX.css
 */
import { AUTO_STYLE, keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnLeave,
  MotionOptions,
} from '@ngverse/motion/core';
import { getGeneralDefaults } from './common/general-defaults';

interface collapseXMotionOptions extends MotionOptions {
  /**
   * The ending width of the element
   */
  endWidth: string;
}

const defaults = createDefaults<collapseXMotionOptions>({
  endWidth: '0px',
});
const name = `collapseX`;

/**
 * collapseX animation
 */
export const collapseX = createMotionFromAnimate<collapseXMotionOptions>(
  keyframes([
    style({
      width: AUTO_STYLE,
      visibility: AUTO_STYLE,
      overflow: 'hidden',
      easing: 'ease-in',
      offset: 0,
    }),
    style({
      width: '{{endWidth}}',
      visibility: 'hidden',
      overflow: 'hidden',
      easing: 'ease-in',
      offset: 1,
    }),
  ]),
  defaults,
  getGeneralDefaults()
);

/**
 * collapseX animation on :leave
 * @remarks triggerName: `collapseXOnLeave`
 */
export const collapseXOnLeave = createOnLeave(
  collapseX,
  name,
  defaults,
  getGeneralDefaults()
);

/**
 * collapseX animation on :decr
 * @remarks triggerName: `collapseXOnDecr`
 */
export const collapseXOnDecr = createOnDecr(
  collapseX,
  name,
  defaults,
  getGeneralDefaults()
);
