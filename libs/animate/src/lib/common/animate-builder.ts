/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  animate,
  animateChild,
  animation,
  AnimationKeyframesSequenceMetadata,
  AnimationMetadata,
  AnimationOptions,
  AnimationReferenceMetadata,
  AnimationStyleMetadata,
  query,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';
import {
  AnimateDefaultOptions,
  AnimateOptions,
  CHILDREN_ANIMATION_TYPE,
  CreateAnimateFactory,
  TriggerAnimateOptions,
} from './animate-types';
import { getAnimateDefaults } from './default-options';

function resolveChildren(
  animation: AnimationReferenceMetadata,
  children: CHILDREN_ANIMATION_TYPE
) {
  if (children === 'before') {
    return [query('@*', animateChild(), { optional: true }), animation];
  }
  if (children === 'after') {
    return [animation, query('@*', animateChild(), { optional: true })];
  } else {
    return [animation];
  }
}

// export function createOnLeave<T extends AnimateOptions>(
//   rawFactory: RawAnimateFactory<T>,
//   name: string,
//   options?: T
// ) {
//   return createTrigger(rawFactory, `${name}OnLeave`,  ':leave');
// }

// export function createOnIncr<T extends AnimateOptions>(
//   rawFactory: RawAnimateFactory<T>,
//   name: string,
//   options?: T
// ) {
//   return createTrigger(rawFactory, `${name}OnIncr`, options, ':incr');
// }

// export function createOnDecr<T extends AnimateOptions>(
//   rawFactory: RawAnimateFactory<T>,
//   name: string,
//   options?: T
// ) {
//   return createTrigger(rawFactory, `${name}OnDecr`, options, ':decr');
// }

export function createDefaults<T extends AnimateOptions>(options?: T) {
  return {
    ...options,
  };
}

export function setDefaults<T extends AnimateOptions>(defaults: T) {
  return (options: Partial<T>) => Object.assign(defaults, options);
}

function getOptionValue<T>(
  key: keyof AnimateOptions,
  options: AnimateOptions | undefined,
  defaults: AnimateOptions
) {
  let value = options?.[key];

  if (!value) {
    value = defaults[key];
  }
  if (!value) {
    value = getAnimateDefaults()[key];
  }
  return value as T;
}

export function createMotion<T extends AnimateOptions>(
  animation: AnimationReferenceMetadata,
  defaults: AnimateOptions
) {
  return (options?: T) => {
    const _time = getOptionValue('time', options, defaults);
    const _delay = getOptionValue<number | string>('delay', options, defaults);

    const animationOptions: AnimationOptions = {
      delay: _delay,
      params: {
        time: _time,
        ...options,
      },
    };
    return useAnimation(animation, animationOptions);
  };
}

export function buildMotion<T extends AnimateOptions>(
  before: AnimationMetadata[],
  after: AnimationKeyframesSequenceMetadata | AnimationStyleMetadata,
  defaults: AnimateOptions
) {
  const _animate = animation([...before, animate('{{ time }}', after)]);
  return createMotion<T>(_animate, defaults);
}

export function createAnimateMotion<T extends AnimateOptions>(
  keyframes: AnimationKeyframesSequenceMetadata | AnimationStyleMetadata,
  defaults: AnimateOptions
) {
  const _animate = animation([animate('{{ time }}', keyframes)]);
  return createMotion<T>(_animate, defaults);
}

export function createTrigger<T extends TriggerAnimateOptions>(
  animateFactory: CreateAnimateFactory<any>,
  triggerName: string,
  transitionName: string,
  defaults: AnimateDefaultOptions
) {
  return (options?: T) => {
    const _triggerName = options?.triggerName ?? triggerName;
    const _transitionName = transitionName;
    let _children = options?.children;
    if (!_children) {
      _children = defaults.children;
    }
    if (!_children) {
      _children = getAnimateDefaults().children;
    }
    if (!_children) {
      _children = 'none';
    }

    return trigger(_triggerName, [
      transition(
        _transitionName,
        resolveChildren(animateFactory(options), _children)
      ),
    ]);
  };
}

export function createOnEnter<T extends TriggerAnimateOptions>(
  rawFactory: CreateAnimateFactory<any>,
  name: string,
  defaults: AnimateOptions
) {
  return createTrigger<T>(rawFactory, `${name}OnEnter`, ':enter', defaults);
}

export function createOnLeave<T extends TriggerAnimateOptions>(
  rawFactory: CreateAnimateFactory<any>,
  name: string,
  defaults: AnimateOptions
) {
  return createTrigger<T>(rawFactory, `${name}OnLeave`, ':leave', defaults);
}

export function createOnIncr<T extends TriggerAnimateOptions>(
  rawFactory: CreateAnimateFactory<any>,
  name: string,
  defaults: AnimateOptions
) {
  return createTrigger<T>(rawFactory, `${name}OnIncr`, ':incr', defaults);
}

export function createOnDecr<T extends TriggerAnimateOptions>(
  rawFactory: CreateAnimateFactory<any>,
  name: string,
  defaults: AnimateOptions
) {
  return createTrigger<T>(rawFactory, `${name}OnDecr`, ':decr', defaults);
}
