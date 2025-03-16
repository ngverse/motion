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
  title: string;
  motions: MotionItem[];
  defaults: MotionOption[];
  setDefault: string;
  description: string;
}

export type MotionData = Array<MotionGroup>;

export function createDefaultOptionsDoc(
  duration: string,
  delay: string,
  easing: string
) {
  return [
    {
      name: 'duration',
      type: 'number',
      default: duration,
      description: 'The duration of the animation in milliseconds',
    },
    {
      name: 'delay',
      type: 'number',
      default: delay,
      description: 'The delay of the animation in milliseconds',
    },
    {
      name: 'easing',
      type: 'string',
      default: easing,
      description:
        'The easing of the animation </br> <strong>Some animations require specific easing functions to be implemented; in that case, this parameter will not apply</strong> ',
    },
    {
      name: 'children',
      type: "'before' | 'after' | 'none'",
      default: 'none',
      description: `<p>Controls the order of child animations relative to the parent animation when using an animation trigger.</p>
  <ul>
    <li><strong>'none'</strong> (default) – Disables child animations, preventing them from running.</li>
    <li><strong>'before'</strong> – Runs child animations first, then the parent animation.</li>
    <li><strong>'after'</strong> – Runs the parent animation first, then the child animations.</li>
  </ul>
  <p>This property is only applicable when using animation triggers. If using raw animations, the execution order must be handled manually.</p>
  `,
    },
  ];
}
