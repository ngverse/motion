/**
 * ref: https://github.com/motion-css/motion.css/blob/main/source/attention_seekers/flash.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createDefaults,
  createMotionMotion,
  createOnDecr,
  createOnEnter,
  createOnIncr,
  createOnLeave,
  setDefaults,
} from '@ngverse/motion/core';

const defaults = createDefaults();
const name = `flash`;

export const flash = createMotionMotion(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, offset: 0.25 }),
    style({ opacity: 1, offset: 0.5 }),
    style({ opacity: 0, offset: 0.75 }),
    style({ opacity: 1, offset: 1 }),
  ]),
  defaults
);

export const flashSetDefaults = setDefaults(defaults);
export const flashOnEnter = createOnEnter(flash, name, defaults);
export const flashOnLeave = createOnLeave(flash, name, defaults);
export const flashOnIncr = createOnIncr(flash, name, defaults);
export const flashOnDecr = createOnDecr(flash, name, defaults);
