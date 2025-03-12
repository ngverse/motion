import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { flashOnEnter } from '@ngverse/motion/animatecss';

import { ANIMATE_DATA, MotionItem } from '../motion-data';

@Component({
  selector: 'app-motion-page',
  imports: [CommonModule],
  templateUrl: './motion-page.html',
  styleUrl: './motion-page.css',
  animations: [flashOnEnter()],
})
export class MotionPageComponent {
  animationItem = signal<MotionItem | undefined>(undefined);
  private animationBuilder = inject(AnimationBuilder);
  private animationPlaher: AnimationPlayer | undefined;
  playable = viewChild<ElementRef<HTMLElement>>('playable');
  isOpen = signal(false);

  import(name: string) {
    return `import { ${name} } from "@ngverse/motion"`;
  }

  constructor() {
    this.animationItem.set(ANIMATE_DATA[0].animations[0]);
    effect(() => {
      const animation = this.animationItem();
      if (animation) {
        const animationFactory = this.animationBuilder.build(
          animation.animation()
        );
        this.animationPlaher = animationFactory?.create(
          this.playable()?.nativeElement
        );
      }
    });
  }

  toggle() {
    this.isOpen.set(!this.isOpen());
  }

  play() {
    this.animationPlaher?.play();
  }
}
