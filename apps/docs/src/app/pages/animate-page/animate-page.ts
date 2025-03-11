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
import { AnimateOptionsComponent } from "../../core/animate-options";
import { TriggerAnimateOptionsComponent } from '../../core/trigger-animate-options';
import { ANIMATE_DATA, AnimateItem } from '../animate-data';

@Component({
  selector: 'app-animate-page',
  imports: [CommonModule, TriggerAnimateOptionsComponent, AnimateOptionsComponent],
  templateUrl: './animate-page.html',
  styleUrl: './animate-page.css',
})
export class AnimatePageComponent {
  animationItem = signal<AnimateItem | undefined>(undefined);
  private animationBuilder = inject(AnimationBuilder);
  private animationPlaher: AnimationPlayer | undefined;
  playable = viewChild<ElementRef<HTMLElement>>('playable');

  import(name: string) {
    return `import { ${name} } from "@ngverse/animate"`;
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

  play() {
    this.animationPlaher?.play();
  }
}
