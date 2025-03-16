/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/collapse.css
 */
import { AUTO_STYLE, keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnDecr,
  createOnLeave,
  MotionOptions,
} from '@ngverse/motion/core';
import { getGeneralcssDefaults } from './common/general-defaults';

interface collapseMotionOptions extends MotionOptions {
  /**
   * The ending height of the element
   */
  endHeight: string;
}

const defaults = createDefaults<collapseMotionOptions>({
  endHeight: '0px',
});
const name = `collapse`;

/**
 * collapse animation
 */
export const collapse = createMotionFromAnimate<collapseMotionOptions>(
  keyframes([
    style({
      height: AUTO_STYLE,
      visibility: AUTO_STYLE,
      overflow: 'hidden',
      easing: 'ease-in',
      offset: 0,
    }),
    style({
      height: '{{endHeight}}',
      visibility: 'hidden',
      overflow: 'hidden',
      easing: 'ease-in',
      offset: 1,
    }),
  ]),
  defaults,
  getGeneralcssDefaults()
);

/**
 * collapse animation on :leave
 * @remarks triggerName: `collapseOnLeave`
 */
export const collapseOnLeave = createOnLeave(
  collapse,
  name,
  defaults,
  getGeneralcssDefaults()
);

/**
 * collapse animation on :decr
 * @remarks triggerName: `collapseOnDecr`
 */
export const collapseOnDecr = createOnDecr(
  collapse,
  name,
  defaults,
  getGeneralcssDefaults()
);
