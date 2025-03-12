import { AnimationReferenceMetadata } from '@angular/animations';

export type CHILDREN_ANIMATION_TYPE = 'before' | 'after' | 'none';

export interface MotionOptions {
  duration?: number;
  delay?: number;
  easing?: string;
}

export type CreateMotionFactory<T extends MotionOptions> = (
  options?: T | undefined
) => AnimationReferenceMetadata;

export interface MotionDefaultOptions extends MotionOptions {
  children?: CHILDREN_ANIMATION_TYPE;
}

export interface TriggerMotionOptions extends MotionDefaultOptions {
  triggerName?: string;
}
