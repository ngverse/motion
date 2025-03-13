/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/expand.css
 */
import { AUTO_STYLE, keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionFromAnimate,
  createOnEnter,
  createOnIncr,
  MotionOptions,
} from '@ngverse/motion/core';
import { getGeneralDefaults } from './common/general-defaults';

interface expandMotionOptions extends MotionOptions {
  /**
   * The starting height of the element
   */
  startHeight: string;
}

const defaults = createDefaults<expandMotionOptions>({
  startHeight: '0px',
});
const name = `expand`;

/**
 * expand animation
 */
export const expand = createMotionFromAnimate<expandMotionOptions>(
  keyframes([
    style({
      height: '{{startHeight}}',
      visibility: 'hidden',
      overflow: 'hidden',
      easing: 'ease-out',
      offset: 0,
    }),
    style({
      height: AUTO_STYLE,
      visibility: AUTO_STYLE,
      overflow: 'hidden',
      easing: 'ease-out',
      offset: 1,
    }),
  ]),
  defaults,
  getGeneralDefaults()
);

/**
 * expand animation on :enter
 * @remarks triggerName: `expandOnEnter`
 */
export const expandOnEnter = createOnEnter(
  expand,
  name,
  defaults,
  getGeneralDefaults()
);

/**
 * expand animation on :incr
 * @remarks triggerName: `expandOnIncr`
 */
export const expandOnIncr = createOnIncr(
  expand,
  name,
  defaults,
  getGeneralDefaults()
);
