// const headShakeAnimation = motion(
//   '1s ease-in-out',
//   keyframes([
//     style({ transform: 'translateX(0)', offset: 0 }),
//     style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
//     style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
//     style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
//     style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
//     style({ transform: 'translateX(0)', offset: 0.5 }),
//   ])
// );

/**
 * ref: https://github.com/motion-css/motion.css/blob/main/source/attention_seekers/shake.css
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
const name = `shake`;

export const shake = createMotionMotion(
  keyframes([
    style({ transform: 'translateX(0)', offset: 0 }),
    style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
    style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
    style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
    style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
    style({ transform: 'translateX(0)', offset: 0.5 }),
  ]),
  defaults
);

export const shakeSetDefaults = setDefaults(defaults);
export const shakeOnEnter = createOnEnter(shake, name, defaults);
export const shakeOnLeave = createOnLeave(shake, name, defaults);
export const shakeOnIncr = createOnIncr(shake, name, defaults);
export const shakeOnDecr = createOnDecr(shake, name, defaults);
