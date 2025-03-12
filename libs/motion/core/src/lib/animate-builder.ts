/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  animation,
  AnimationKeyframesSequenceMetadata,
  AnimationMetadata,
  AnimationOptions,
  AnimationReferenceMetadata,
  AnimationStyleMetadata,
  motion,
  motionChild,
  query,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';
import { getMotionDefaults } from './default-options';
import {
  CHILDREN_ANIMATION_TYPE,
  CreateMotionFactory,
  MotionDefaultOptions,
  MotionOptions,
  TriggerMotionOptions,
} from './motion-types';

function resolveChildren(
  animation: AnimationReferenceMetadata,
  children: CHILDREN_ANIMATION_TYPE
) {
  if (children === 'before') {
    return [query('@*', motionChild(), { optional: true }), animation];
  }
  if (children === 'after') {
    return [animation, query('@*', motionChild(), { optional: true })];
  } else {
    return [animation];
  }
}

// export function createOnLeave<T extends MotionOptions>(
//   rawFactory: RawMotionFactory<T>,
//   name: string,
//   options?: T
// ) {
//   return createTrigger(rawFactory, `${name}OnLeave`,  ':leave');
// }

// export function createOnIncr<T extends MotionOptions>(
//   rawFactory: RawMotionFactory<T>,
//   name: string,
//   options?: T
// ) {
//   return createTrigger(rawFactory, `${name}OnIncr`, options, ':incr');
// }

// export function createOnDecr<T extends MotionOptions>(
//   rawFactory: RawMotionFactory<T>,
//   name: string,
//   options?: T
// ) {
//   return createTrigger(rawFactory, `${name}OnDecr`, options, ':decr');
// }

export function createDefaults<T extends MotionOptions>(options?: T) {
  return {
    ...options,
  };
}

export function setDefaults<T extends MotionOptions>(defaults: T) {
  return (options: Partial<T>) => Object.assign(defaults, options);
}

function getOptionValue<T>(
  key: keyof MotionOptions,
  options: MotionOptions | undefined,
  defaults: MotionOptions
) {
  let value = options?.[key];

  if (!value) {
    value = defaults[key];
  }
  if (!value) {
    value = getMotionDefaults()[key];
  }
  return value as T;
}

export function createMotion<T extends MotionOptions>(
  animation: AnimationReferenceMetadata,
  defaults: MotionOptions
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

export function buildMotion<T extends MotionOptions>(
  before: AnimationMetadata[],
  after: AnimationKeyframesSequenceMetadata | AnimationStyleMetadata,
  defaults: MotionOptions
) {
  const _motion = animation([...before, motion('{{ time }}', after)]);
  return createMotion<T>(_motion, defaults);
}

export function createMotionMotion<T extends MotionOptions>(
  keyframes: AnimationKeyframesSequenceMetadata | AnimationStyleMetadata,
  defaults: MotionOptions
) {
  const _motion = animation([motion('{{ time }}', keyframes)]);
  return createMotion<T>(_motion, defaults);
}

export function createTrigger<T extends TriggerMotionOptions>(
  motionFactory: CreateMotionFactory<any>,
  triggerName: string,
  transitionName: string,
  defaults: MotionDefaultOptions
) {
  return (options?: T) => {
    const _triggerName = options?.triggerName ?? triggerName;
    const _transitionName = transitionName;
    let _children = options?.children;
    if (!_children) {
      _children = defaults.children;
    }
    if (!_children) {
      _children = getMotionDefaults().children;
    }
    if (!_children) {
      _children = 'none';
    }

    return trigger(_triggerName, [
      transition(
        _transitionName,
        resolveChildren(motionFactory(options), _children)
      ),
    ]);
  };
}

export function createOnEnter<T extends TriggerMotionOptions>(
  rawFactory: CreateMotionFactory<any>,
  name: string,
  defaults: MotionOptions
) {
  return createTrigger<T>(rawFactory, `${name}OnEnter`, ':enter', defaults);
}

export function createOnLeave<T extends TriggerMotionOptions>(
  rawFactory: CreateMotionFactory<any>,
  name: string,
  defaults: MotionOptions
) {
  return createTrigger<T>(rawFactory, `${name}OnLeave`, ':leave', defaults);
}

export function createOnIncr<T extends TriggerMotionOptions>(
  rawFactory: CreateMotionFactory<any>,
  name: string,
  defaults: MotionOptions
) {
  return createTrigger<T>(rawFactory, `${name}OnIncr`, ':incr', defaults);
}

export function createOnDecr<T extends TriggerMotionOptions>(
  rawFactory: CreateMotionFactory<any>,
  name: string,
  defaults: MotionOptions
) {
  return createTrigger<T>(rawFactory, `${name}OnDecr`, ':decr', defaults);
}
