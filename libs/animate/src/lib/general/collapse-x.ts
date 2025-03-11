import { style } from '@angular/animations';
import {
  createAnimateMotion,
  createDefaults,
  createOnDecr,
  createOnEnter,
  createOnIncr,
  createOnLeave,
  setDefaults,
} from '../common/animate-builder';
import { GENERAL_PREFIX } from '../common/constants';

const defaults = createDefaults();
const name = `${GENERAL_PREFIX}Collapse`;

export const anCollapse = createAnimateMotion(style({ width: 0 }), defaults);

export const anCollapseSetDefaults = setDefaults(defaults);
export const anCollapseOnEnter = createOnEnter(anCollapse, name, defaults);
export const anCollapseOnLeave = createOnLeave(anCollapse, name, defaults);
export const anCollapseOnIncr = createOnIncr(anCollapse, name, defaults);
export const anCollapseOnDecr = createOnDecr(anCollapse, name, defaults);
