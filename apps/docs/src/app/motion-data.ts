import { AnimationReferenceMetadata } from '@angular/animations';
import {
  backInDown,
  backInLeft,
  backInRight,
  backInUp,
  bounce,
  flash,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  hinge,
  jackInTheBox,
  pulse,
  rollIn,
  rollOut,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
} from '@ngverse/motion/animatecss';
import {
  collapse,
  collapseX,
  expand,
  expandX,
} from '@ngverse/motion/generalcss';

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
    name: 'generalcss',
    motions: [
      {
        name: 'expand',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: expand,
        options: [
          {
            name: 'startHeight',
            type: 'string',
            default: '0px',
            description: 'The starting height of the element',
          },
        ],
      },
      {
        name: 'expand-x',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: expandX,
        options: [
          {
            name: 'startWidth',
            type: 'string',
            default: '0px',
            description: 'The starting width of the element',
          },
        ],
      },
      {
        name: 'collapse',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: collapse,
        options: [
          {
            name: 'endHeight',
            type: 'string',
            default: '0px',
            description: 'The ending height of the element',
          },
        ],
      },
      {
        name: 'collapse-x',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: collapseX,
        options: [
          {
            name: 'endWidth',
            type: 'string',
            default: '0px',
            description: 'The ending width of the element',
          },
        ],
      },
    ],
  },
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
      {
        href: getAnimatecssLink('flippers', 'flip'),
        name: 'flip',
        triggers: [TRIGGER_TYPES.All],
        motion: flip,
      },
      {
        href: getAnimatecssLink('flippers', 'flipInX'),
        name: 'flipInX',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: flipInX,
      },
      {
        href: getAnimatecssLink('flippers', 'flipInY'),
        name: 'flipInY',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: flipInY,
      },
      {
        href: getAnimatecssLink('flippers', 'flipOutX'),
        name: 'flipOutX',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: flipOutX,
      },
      {
        href: getAnimatecssLink('flippers', 'flipOutX'),
        name: 'flipOutY',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: flipOutY,
      },
      {
        href: getAnimatecssLink('specials', 'hinge'),
        name: 'hinge',
        triggers: [TRIGGER_TYPES.All],
        motion: hinge,
      },
      {
        href: getAnimatecssLink('specials', 'jackInTheBox'),
        name: 'jackInTheBox',
        triggers: [TRIGGER_TYPES.All],
        motion: jackInTheBox,
      },
      {
        href: getAnimatecssLink('specials', 'rollIn'),
        name: 'rollIn',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: rollIn,
      },
      {
        href: getAnimatecssLink('specials', 'rollOut'),
        name: 'rollOut',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: rollOut,
      },
      {
        href: getAnimatecssLink('zooming_entrances', 'zoomIn'),
        name: 'zoomIn',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: zoomIn,
      },
      {
        href: getAnimatecssLink('zooming_entrances', 'zoomInDown'),
        name: 'zoomInDown',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: zoomInDown,
      },
      {
        href: getAnimatecssLink('zooming_entrances', 'zoomInLeft'),
        name: 'zoomInLeft',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: zoomInLeft,
      },
      {
        href: getAnimatecssLink('zooming_entrances', 'zoomInRight'),
        name: 'zoomInRight',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: zoomInRight,
      },
      {
        href: getAnimatecssLink('zooming_entrances', 'zoomInUp'),
        name: 'zoomInUp',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: zoomInUp,
      },

      {
        href: getAnimatecssLink('zooming_exits', 'zoomOut'),
        name: 'zoomOut',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: zoomOut,
      },
      {
        href: getAnimatecssLink('zooming_exits', 'zoomOutDown'),
        name: 'zoomOutDown',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: zoomOutDown,
      },
      {
        href: getAnimatecssLink('zooming_exits', 'zoomOutLeft'),
        name: 'zoomOutLeft',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: zoomOutLeft,
      },
      {
        href: getAnimatecssLink('zooming_exits', 'zoomOutRight'),
        name: 'zoomOutRight',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: zoomOutRight,
      },
      {
        href: getAnimatecssLink('zooming_exits', 'zoomOutUp'),
        name: 'zoomOutUp',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: zoomOutUp,
      },

      {
        href: getAnimatecssLink('sliding_entrances', 'slideInDown'),
        name: 'slideInDown',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: slideInDown,
      },
      {
        href: getAnimatecssLink('sliding_entrances', 'slideInLeft'),
        name: 'slideInLeft',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: slideInLeft,
      },
      {
        href: getAnimatecssLink('sliding_entrances', 'slideInRight'),
        name: 'slideInRight',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: slideInRight,
      },
      {
        href: getAnimatecssLink('sliding_entrances', 'slideInUp'),
        name: 'slideInUp',
        triggers: [TRIGGER_TYPES.AllEnters],
        motion: slideInUp,
      },

      {
        href: getAnimatecssLink('sliding_exits', 'slideOutDown'),
        name: 'slideOutDown',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: slideOutDown,
      },
      {
        href: getAnimatecssLink('sliding_exits', 'slideOutLeft'),
        name: 'slideOutLeft',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: slideOutLeft,
      },
      {
        href: getAnimatecssLink('sliding_exits', 'slideOutRight'),
        name: 'slideOutRight',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: slideOutRight,
      },
      {
        href: getAnimatecssLink('sliding_exits', 'slideOutUp'),
        name: 'slideOutUp',
        triggers: [TRIGGER_TYPES.AllLeaves],
        motion: slideOutUp,
      },
    ],
  },
];
