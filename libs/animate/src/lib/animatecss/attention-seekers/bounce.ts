import { animate, animation, keyframes, style } from '@angular/animations';
import { AnimateBuilder } from '../../common/animate-builder';
import { AnimateOptions } from '../../common/animate-options';

export type AnBounceOptions = AnimateOptions;

const builder = new AnimateBuilder<AnBounceOptions>(
  'bounce',
  animation([
    animate(
      '{{ time }}',
      keyframes([
        style({
          transformOrigin: 'center bottom',
          transform: 'translate3d(0, 0, 0)',
          offset: 0,
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        }),
        style({
          transform: 'translate3d(0, 0, 0)',
          offset: 0,
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        }),
        style({
          transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
          offset: 0.4,
          easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        }),
        style({
          transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
          offset: 0.43,
        }),
        style({
          transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
          offset: 0.7,
        }),
        style({
          transform: 'translate3d(0, 0, 0) scaleY(0.95)',
          offset: 0.8,
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        }),
        style({
          transform: 'translate3d(0, -4px, 0) scaleY(1.02)',
          offset: 0.9,
        }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
      ])
    ),
  ])
);

export const anBounce = builder.raw;
export const anBounceOnEnter = builder.enter.bind(builder);
export const anBounceOnLeave = builder.leave.bind(builder);
