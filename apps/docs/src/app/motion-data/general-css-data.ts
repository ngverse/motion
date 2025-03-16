import {
  collapse,
  collapseX,
  expand,
  expandX,
} from '@ngverse/motion/generalcss';
import {
  createDefaultOptionsDoc,
  MotionGroup,
  TRIGGER_TYPES,
} from './motion-types';

export const GENERAL_CSS_DATA: MotionGroup = {
  name: 'generalcss',
  title: 'General CSS',
  description:
    "General CSS doesn't use any underline CSS library; it is a collection of animations that are handy for your web app.",
  defaults: createDefaultOptionsDoc('250', '0', 'ease-in-out'),
  setDefault: 'setGeneralcssDefaults',
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
};
