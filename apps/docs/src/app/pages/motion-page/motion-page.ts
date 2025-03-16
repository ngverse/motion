import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { Platform } from '@angular/cdk/platform';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { matOpenInNew, matReplay } from '@ng-icons/material-icons/baseline';
import { ApiTableComponent } from '../../core/api-table/api-table.component';
import { ProjectNameComponent } from '../../core/project-name/project-name.component';
import { SourceCodeComponent } from '../../core/source-code/source-code.component';
import { ANIMATE_DATA } from '../../motion-data/motion-data';
import {
  MotionItem,
  MotionOption,
  TRIGGER_TYPES,
} from '../../motion-data/motion-types';
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

@Component({
  selector: 'app-motion-page',
  imports: [
    CommonModule,
    SourceCodeComponent,
    NgIcon,
    ApiTableComponent,
    ProjectNameComponent,
  ],
  templateUrl: './motion-page.html',
  styleUrl: './motion-page.css',
})
export class MotionPageComponent implements AfterViewInit {
  motion = signal<MotionItem | undefined>(undefined);
  private animationBuilder = inject(AnimationBuilder);
  private animationPlaher: AnimationPlayer | undefined;
  playable = viewChild<ElementRef<HTMLElement>>('playable');
  isOpen = signal(false);
  REPLAY_ICON = matReplay;
  EXTERNAL_LINK = matOpenInNew;
  private _document = inject(DOCUMENT);
  title = inject(Title);
  meta = inject(Meta);

  private _activatedRoute = inject(ActivatedRoute);

  libraryName = signal<string>('');

  platform = inject(Platform);
  router = inject(Router);

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
    if (firstTrigger === TRIGGER_TYPES.AllExceptEnter) {
      return [TRIGGER_TYPES.Leave, TRIGGER_TYPES.Incr, TRIGGER_TYPES.Decr];
    }
    if (firstTrigger === TRIGGER_TYPES.AllExceptLeave) {
      return [TRIGGER_TYPES.Enter, TRIGGER_TYPES.Incr, TRIGGER_TYPES.Decr];
    }
    if (firstTrigger === TRIGGER_TYPES.AllEnters) {
      return [TRIGGER_TYPES.Enter, TRIGGER_TYPES.Incr];
    }
    if (firstTrigger === TRIGGER_TYPES.AllLeaves) {
      return [TRIGGER_TYPES.Leave, TRIGGER_TYPES.Decr];
    }
    return triggers;
  });

  updateMeta(motionName: string, libraryName: string) {
    const title = `${motionName} ${libraryName} | @ngverse/motion`;
    const description = `${motionName} animation from ${libraryName} library in @ngverse/motion`;
    this.title.setTitle(title);
    if (motionName) {
      this.meta.updateTag({
        name: 'description',
        content: description,
      });
    }
    this.meta.addTags([
      { property: 'og:title', content: title },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: 'https://motion.ngverse.dev/logo.png',
      },
      { property: 'og:image:alt', content: '@ngverse/motion logo' },
      { property: 'og:url', content: this._document.location.href },
      { property: 'og:type', content: 'website' },
    ]);
  }

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

  import(name: string) {
    return `import { ${name} } from "@ngverse/motion"`;
  }

  updateFunctionCode = computed(
    () =>
      `import { set${capitalize(
        this.motion()?.name ?? ''
      )}Defaults } from '@ngverse/motion/${this.libraryName()}' `
  );

  defaultOptions = signal<MotionOption[]>([]);

  ngAfterViewInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      const libraryName = params.get('libraryName');
      const motionName = params.get('motionName');
      const playable = this.playable()?.nativeElement;
      if (libraryName && motionName && playable) {
        this.fillMotion(libraryName, motionName, playable);
        this.updateMeta(motionName, libraryName);
      }
    });
  }

  fillMotion(libraryName: string, motionName: string, playable: HTMLElement) {
    const library = ANIMATE_DATA.find((a) => a.name === libraryName);
    if (library) {
      const motion = library.motions.find((m) => m.name === motionName);
      if (motion) {
        this.defaultOptions.set(
          motion.options?.length ? motion.options : library.defaults
        );
        this.motion.set(motion);
        this.libraryName.set(libraryName);
        const animationFactory = this.animationBuilder.build(motion.motion());
        // this.animationPlaher?.destroy();
        this.animationPlaher = animationFactory?.create(playable);
        try {
          this.animationPlaher?.onDone(() => {
            setTimeout(() => {
              this.animationPlaher?.reset();
            }, 200);
          });
          // eslint-disable-next-line no-empty
        } catch {}

        if (this.platform.isBrowser) {
          setTimeout(() => {
            this.play();
          }, 300);

          this._document.defaultView?.scrollTo({
            top: 0,
          });
        }
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
