/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/flash.css
 */
import { keyframes, style } from '@angular/animations';
import {
  createAnimateMotion,
  createDefaults,
  createOnDecr,
  createOnEnter,
  createOnIncr,
  createOnLeave,
  setDefaults,
} from '@ngverse/animate/core';

const defaults = createDefaults();
const name = `flash`;

export const flash = createAnimateMotion(
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
