import {
  collapse,
  collapseX,
  expand,
  expandX,
} from '@ngverse/motion/generalcss';
import { ANIMATE_CSS_DATA } from './animate-css-data';
import { MotionData, TRIGGER_TYPES } from './motion-types';

export const ANIMATE_DATA: MotionData = [
  {
    name: 'generalcss',
    defaults: [],
    setDefault: '',
    description: '',
    title: '',
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
  ANIMATE_CSS_DATA,
];
