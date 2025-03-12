import { AnimationReferenceMetadata } from '@angular/animations';
import { anFlash } from '@ngverse/motion';

interface MotionVariant {
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

export interface MotionItem {
  name: string;
  triggers: TRIGGER_TYPES[];
  animation: () => AnimationReferenceMetadata;
}

export interface MotionGroup {
  name: string;
  animations: MotionItem[];
}

export type MotionData = Array<MotionGroup>;

export const ANIMATE_DATA: MotionData = [
  {
    name: 'motion-css',
    animations: [
      {
        name: 'flash',
        triggers: [TRIGGER_TYPES.All],
        animation: anFlash,
      },
    ],
  },
];
