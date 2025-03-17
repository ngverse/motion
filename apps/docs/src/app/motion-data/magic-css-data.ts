import { twisterInDown } from '@ngverse/motion/magiccss';
import {
  createDefaultOptionsDoc,
  MotionGroup,
  TRIGGER_TYPES,
} from './motion-types';

export const MOTION_CSS_DATA: MotionGroup = {
  name: 'magiccss',
  title: 'Magic CSS',
  description:
    "General CSS doesn't use any underline CSS library; it is a collection of animations that are handy for your web app.",
  defaults: createDefaultOptionsDoc('250', '0', 'ease-in-out'),
  setDefault: 'setGeneralcssDefaults',
  motions: [
    {
      name: 'twisterInDown',
      triggers: [TRIGGER_TYPES.AllEnters],
      motion: twisterInDown,
    },
  ],
};
