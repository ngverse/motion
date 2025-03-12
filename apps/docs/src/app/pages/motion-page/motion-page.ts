import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { flashOnEnter } from '@ngverse/motion/animatecss';

import { NgIcon } from '@ng-icons/core';
import { matOpenInNew, matReplay } from '@ng-icons/material-icons/baseline';
import { SourceCodeComponent } from '../../core/source-code/source-code.component';
import { ANIMATE_DATA, MotionItem, TRIGGER_TYPES } from '../motion-data';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

@Component({
  selector: 'app-motion-page',
  imports: [CommonModule, SourceCodeComponent, NgIcon],
  templateUrl: './motion-page.html',
  styleUrl: './motion-page.css',
  animations: [flashOnEnter()],
})
export class MotionPageComponent {
  motion = signal<MotionItem | undefined>(undefined);
  private animationBuilder = inject(AnimationBuilder);
  private animationPlaher: AnimationPlayer | undefined;
  playable = viewChild<ElementRef<HTMLElement>>('playable');
  isOpen = signal(false);
  REPLAY_ICON = matReplay;
  EXTERNAL_LINK = matOpenInNew;

  triggers = computed(() => {
    const triggers = this.motion()?.triggers;
    if (!triggers) {
      return [];
    }
    const firstTrigger = triggers[0];

    if (firstTrigger === TRIGGER_TYPES.All) {
      return [
        TRIGGER_TYPES.Enter,
        TRIGGER_TYPES.Leave,
        TRIGGER_TYPES.Incr,
        TRIGGER_TYPES.Decr,
      ];
    }
    return triggers;
  });

  triggerImportCode(type: TRIGGER_TYPES) {
    return `import { ${this.triggerImportName(
      type
    )} } from '@ngverse/motion/${this.libraryName()}' `;
  }

  triggerImportName(type: TRIGGER_TYPES) {
    return `${this.motion()?.name}On${capitalize(type)}`;
  }

  triggerUsageName(type: TRIGGER_TYPES) {
    return `@${this.motion()?.name}On${capitalize(type)}`;
  }

  triggerAnimateType(type: TRIGGER_TYPES) {
    return `:${type}`;
  }

  importCode = computed(
    () =>
      `import { ${
        this.motion()?.name
      } } from '@ngverse/motion/${this.libraryName()}' `
  );

  libraryName = input.required<string>();
  motionName = input.required<string>();

  import(name: string) {
    return `import { ${name} } from "@ngverse/motion"`;
  }

  constructor() {
    effect(() => {
      this.fillMotion();
    });
  }

  fillMotion() {
    const libraryName = this.libraryName();
    const motionName = this.motionName();
    const library = ANIMATE_DATA.find((a) => a.name === libraryName);
    if (library) {
      const motion = library.motions.find((m) => m.name === motionName);
      if (motion) {
        this.motion.set(motion);
        const animationFactory = this.animationBuilder.build(motion.motion());
        this.animationPlaher = animationFactory?.create(
          this.playable()?.nativeElement
        );
      }
    }
  }

  toggle() {
    this.isOpen.set(!this.isOpen());
  }

  play() {
    this.animationPlaher?.play();
  }
}
