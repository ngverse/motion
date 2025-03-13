import { AnimationReferenceMetadata } from '@angular/animations';
import {
  backInDown,
  backInLeft,
  backInRight,
  backInUp,
  bounce,
  flash,
  pulse,
} from '@ngverse/motion/animatecss';

export enum TRIGGER_TYPES {
  Enter = 'enter',
  Leave = 'leave',
  Incr = 'incr',
  Decr = 'decr',
  All = 'all',
  AllExceptEnter = 'allExceptEnter',
  AllExceptLeave = 'allExceptLeave',
  AllEnters = 'allEnters',
  AllLeaves = 'allLeaves',
}

export interface MotionOption {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface MotionItem {
  name: string;
  triggers: TRIGGER_TYPES[];
  alias?: string;
  href?: string;
  motion: () => AnimationReferenceMetadata;
  options?: MotionOption[];
}

export interface MotionGroup {
  name: string;
  motions: MotionItem[];
}

export type MotionData = Array<MotionGroup>;

function getAnimatecssLink(group: string, name: string) {
  return `https://github.com/animate-css/animate.css/blob/main/source/${group}/${name}.css`;
}

export const ANIMATE_DATA: MotionData = [
  {
    name: 'animatecss',
    motions: [
      {
        href: getAnimatecssLink('attention_seekers', 'flash'),
        name: 'flash',
        triggers: [TRIGGER_TYPES.All],
        motion: flash,
      },
      {
        href: getAnimatecssLink('attention_seekers', 'bounce'),
        name: 'bounce',
        triggers: [TRIGGER_TYPES.All],
        motion: bounce,
      },
      {
        href: getAnimatecssLink('attention_seekers', 'pulse'),
        name: 'pulse',
        triggers: [TRIGGER_TYPES.All],
        motion: pulse,
      },
      {
        href: getAnimatecssLink('back_entrances', 'backInDown'),
        name: 'backInDown',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: backInDown,
        options: [
          {
            name: 'startTranslateY',
            type: 'string',
            default: '-1200px',
            description: 'The starting position of the element',
          },
        ],
      },
      {
        href: getAnimatecssLink('back_entrances', 'backInLeft'),
        name: 'backInLeft',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: backInLeft,
        options: [
          {
            name: 'startTranslateX',
            type: 'string',
            default: '-2000px',
            description: 'The starting position of the element',
          },
        ],
      },
      {
        href: getAnimatecssLink('back_entrances', 'backInRight'),
        name: 'backInRight',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: backInRight,
        options: [
          {
            name: 'startTranslateX',
            type: 'string',
            default: '2000px',
            description: 'The starting position of the element',
          },
        ],
      },
      {
        href: getAnimatecssLink('back_entrances', 'backInUp'),
        name: 'backInUp',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: backInUp,
        options: [
          {
            name: 'startTranslateX',
            type: 'string',
            default: '2000px',
            description: 'The starting position of the element',
          },
        ],
      },
    ],
  },
];
