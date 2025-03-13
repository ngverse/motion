/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/flippers/expandX.css
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

interface expandXMotionOptions extends MotionOptions {
  /**
   * The starting width of the element
   */
  startWidth: string;
}

const defaults = createDefaults<expandXMotionOptions>({
  startWidth: '0px',
});
const name = `expandX`;

/**
 * expandX animation
 */
export const expandX = createMotionFromAnimate<expandXMotionOptions>(
  keyframes([
    style({
      width: '{{startWidth}}',
      visibility: 'hidden',
      overflow: 'hidden',
      easing: 'ease-out',
      offset: 0,
    }),
    style({
      width: AUTO_STYLE,
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
 * expandX animation on :enter
 * @remarks triggerName: `expandXOnEnter`
 */
export const expandXOnEnter = createOnEnter(
  expandX,
  name,
  defaults,
  getGeneralDefaults()
);

/**
 * expandX animation on :incr
 * @remarks triggerName: `expandXOnIncr`
 */
export const expandXOnIncr = createOnIncr(
  expandX,
  name,
  defaults,
  getGeneralDefaults()
);
