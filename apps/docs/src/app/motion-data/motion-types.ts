import { AnimationReferenceMetadata } from '@angular/animations';

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
