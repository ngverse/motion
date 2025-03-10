import {
  AnimationOptions,
  AnimationReferenceMetadata,
} from '@angular/animations';

export type CHILDREN_ANIMATION_TYPE = 'before' | 'after' | 'none';

export interface AnimateOptions extends AnimationOptions {
  time?: string;
}

export type CreateAnimateFactory<T extends AnimateOptions> = (
  options?: T | undefined
) => AnimationReferenceMetadata;

export interface AnimateDefaultOptions extends AnimateOptions {
  children?: CHILDREN_ANIMATION_TYPE;
}

export interface TriggerAnimateOptions extends AnimateDefaultOptions {
  triggerName?: string;
}
