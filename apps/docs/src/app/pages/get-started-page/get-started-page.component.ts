import { transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeIn } from '@ngverse/motion/animatecss';
import { ProjectNameComponent } from '../../core/project-name/project-name.component';
import { SourceCodeComponent } from '../../core/source-code/source-code.component';

@Component({
  selector: 'app-get-started-page',
  imports: [ProjectNameComponent, SourceCodeComponent],
  templateUrl: './get-started-page.component.html',
  styleUrl: './get-started-page.component.css',
  animations: [trigger('show', [transition(':enter', [fadeIn()])])],
})
export class GetStartedPageComponent {
  exampleUsage = `
    import {fadeIn} from "@ngverse/motion/animatecss";
    @Component({
       template:"<h1 @show>Hello</h1>",

       animations:[
         trigger("show",[
              transition(":enter",[fadeIn()])
        ])
       ]
    })
    export class ExampleComponent{
    }
  `;

  enterExampleUsage = `
    import {fadeInOnEnter} from "@ngverse/motion/animatecss";

    @Component({
       template:"<h1 @fadeInOnEnter>Hello</h1>",

       animations:[fadeInOnEnter()]
    })
    export class ExampleComponent{
    }
  `;
}
