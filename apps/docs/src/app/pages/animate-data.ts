import { AnimationReferenceMetadata } from '@angular/animations';
import { anFlash } from '@ngverse/animate';

interface AnimateVariant {
  name: string;
  triggerName: string;
}

enum TRIGGER_TYPES {
  Enter = 1,
  Leave = 2,
  Incr = 3,
  Decr = 4,
  All = 5,
}

export interface AnimateItem {
  name: string;
  triggers: TRIGGER_TYPES[];
  animation: () => AnimationReferenceMetadata;
}

export interface AnimateGroup {
  name: string;
  animations: AnimateItem[];
}

export type AnimateData = Array<AnimateGroup>;

export const ANIMATE_DATA: AnimateData = [
  {
    name: 'animate-css',
    animations: [
      {
        name: 'flash',
        triggers: [TRIGGER_TYPES.All],
        animation: anFlash,
      },
    ],
  },
];
