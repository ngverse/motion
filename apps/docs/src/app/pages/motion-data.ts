import { AnimationReferenceMetadata } from '@angular/animations';
import { bounce, flash, pulse } from '@ngverse/motion/animatecss';

interface MotionVariant {
  name: string;
  triggerName: string;
}

export enum TRIGGER_TYPES {
  Enter = 'enter',
  Leave = 'leave',
  Incr = 'incr',
  Decr = 'decr',
  All = 'all',
}

export interface MotionItem {
  name: string;
  triggers: TRIGGER_TYPES[];
  alias?: string;
  href?: string;
  motion: () => AnimationReferenceMetadata;
}

export interface MotionGroup {
  name: string;
  motions: MotionItem[];
}

export type MotionData = Array<MotionGroup>;

export const ANIMATE_DATA: MotionData = [
  {
    name: 'animatecss',
    motions: [
      {
        href: 'https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/flash.css',
        name: 'flash',
        triggers: [TRIGGER_TYPES.All],
        motion: flash,
      },
      {
        href: 'https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/bounce.css',
        name: 'bounce',
        triggers: [TRIGGER_TYPES.All],
        motion: bounce,
      },
      {
        href: 'https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/pulse.css',
        name: 'pulse',
        triggers: [TRIGGER_TYPES.All],
        motion: pulse,
      },
    ],
  },
];
