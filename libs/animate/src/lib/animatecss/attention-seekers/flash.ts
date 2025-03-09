import { animate, animation, keyframes, style } from '@angular/animations';
import { AnimateBuilder } from '../../common/animate-builder';
import { AnimateOptions } from '../../common/animate-options';

export type AnFlashOptions = AnimateOptions;

const builder = new AnimateBuilder<AnFlashOptions>(
  'flash',
  animation([
    animate(
      '{{ time }}',
      keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0, offset: 0.25 }),
        style({ opacity: 1, offset: 0.5 }),
        style({ opacity: 0, offset: 0.75 }),
        style({ opacity: 1, offset: 1 }),
      ])
    ),
  ])
);

export const anFlash = builder.raw.bind(builder);
export const anFlashOnEnter = builder.enter.bind(builder);
export const anFlashOnIncr = builder.incr.bind(builder);
