import { keyframes, style } from '@angular/animations';
import { ANIMATE_CSS_PREFIX } from '../../common/constants';
import {
  createDefaults,
  createMotionMotion,
  createOnDecr,
  createOnEnter,
  createOnIncr,
  createOnLeave,
  setDefaults,
} from '../../common/motion-builder';

const defaults = createDefaults();
const name = `${ANIMATE_CSS_PREFIX}Flash`;

export const anFlash = createMotionMotion(
  keyframes([
    style({ opacity: 1, offset: 0 }),
    style({ opacity: 0, offset: 0.25 }),
    style({ opacity: 1, offset: 0.5 }),
    style({ opacity: 0, offset: 0.75 }),
    style({ opacity: 1, offset: 1 }),
  ]),
  defaults
);

export const anFlashSetDefaults = setDefaults(defaults);
export const anFlashOnEnter = createOnEnter(anFlash, name, defaults);
export const anFlashOnLeave = createOnLeave(anFlash, name, defaults);
export const anFlashOnIncr = createOnIncr(anFlash, name, defaults);
export const anFlashOnDecr = createOnDecr(anFlash, name, defaults);
