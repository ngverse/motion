import { AUTO_STYLE, style } from '@angular/animations';
import { GENERAL_PREFIX } from '../common/constants';
import { buildMotion, createDefaults, createOnDecr, createOnEnter, createOnIncr, createOnLeave, setDefaults } from "../common/motion-builder";


const defaults = createDefaults();
const name = `${GENERAL_PREFIX}Expand`;

export const nxExpand = buildMotion(
  [style({ width: 0 })],
  style({ width: AUTO_STYLE }),
  defaults
);

export const nxExpandSetDefaults = setDefaults(defaults);
export const nxExpandOnEnter = createOnEnter(nxExpand, name, defaults);
export const nxExpandOnLeave = createOnLeave(nxExpand, name, defaults);
export const nxExpandOnIncr = createOnIncr(nxExpand, name, defaults);
export const nxExpandOnDecr = createOnDecr(nxExpand, name, defaults);
