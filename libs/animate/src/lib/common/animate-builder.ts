import {
  AnimationOptions,
  AnimationReferenceMetadata,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { AnimateOptions } from './animate-options';

export class AnimateBuilder<T extends AnimateOptions> {
  constructor(
    public readonly name: string,
    private readonly animation: AnimationReferenceMetadata,
    public defaultOptions?: T | undefined
  ) {}

  setDefaults(options: T) {
    this.defaultOptions = options;
  }

  raw(options?: T) {
    const _delay = options?.delay;
    const _time = options?.time ?? '1s';
    const _params = options?.params ?? {};

    const animationOptions: AnimationOptions = {
      ..._params,
      params: {
        ..._params,
        time: _time,
      },
      delay: _delay,
    };
    return useAnimation(this.animation, animationOptions);
  }

  enter(options?: T) {
    return this.registerTrigger(`${this.name}OnEnter`, options, ':enter');
  }

  leave() {
    return this.registerTrigger(`${this.name}OnLeave`, undefined, ':leave');
  }

  incr() {
    return this.registerTrigger(`${this.name}OnIncr`, undefined, ':increment');
  }

  decr(options?: T) {
    return this.registerTrigger(`${this.name}OnDecr`, options, ':decrement');
  }

  registerTrigger(
    triggerName: string,
    options: T | undefined,
    transitionName: string
  ) {
    const _triggerName = options?.triggerName || triggerName;
    const _transitionName = transitionName;
    return trigger(_triggerName, [
      transition(_transitionName, [this.raw(options)]),
    ]);
  }
}
