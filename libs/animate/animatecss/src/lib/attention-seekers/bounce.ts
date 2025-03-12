/**
 * ref: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/bounce.css
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
const name = `bounce`;

export const bounce = createAnimateMotion(
  keyframes([
    style({
      transform: 'translate3d(0, 0, 0)',
      offset: 0,
      'transform-origin': 'center bottom',
    }),
    style({
      transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
      offset: 0.4,
      easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'transform-origin': 'center bottom',
    }),
    style({
      transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
      offset: 0.43,
      easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'transform-origin': 'center bottom',
    }),
    style({
      transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
      offset: 0.7,
      easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'transform-origin': 'center bottom',
    }),
    style({
      transform: 'translate3d(0, 0, 0) scaleY(0.95)',
      offset: 0.8,
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'transform-origin': 'center bottom',
    }),
    style({
      transform: 'translate3d(0, -4px, 0) scaleY(1.02)',
      offset: 0.9,
      'transform-origin': 'center bottom',
    }),
    style({
      transform: 'translate3d(0, 0, 0)',
      offset: 1,
      'transform-origin': 'center bottom',
    }),
  ]),
  defaults
);

export const bounceSetDefaults = setDefaults(defaults);
export const bounceOnEnter = createOnEnter(bounce, name, defaults);
export const bounceOnLeave = createOnLeave(bounce, name, defaults);
export const bounceOnIncr = createOnIncr(bounce, name, defaults);
export const bounceOnDecr = createOnDecr(bounce, name, defaults);
