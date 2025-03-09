import { AnimationOptions } from '@angular/animations';

export interface AnimateOptions<T = { [key: string]: string }>
  extends Pick<AnimationOptions, 'delay'> {
  children?: 'before' | 'after' | 'together';
  triggerName?: string;
  time?: string;
  params?: T;
}
